import { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import LogoBar from "../components/logo-bar/LogoBar";
import './HomePage.css';
import TranscriptionService from '../services/transcriptionService';
import { ScrollPanel } from 'primereact/scrollpanel';
import { generateTranscriptPDF } from '../utils/pdfGenerator';

function HomePage() {
    const [url, setUrl] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [summerizeLoading, setsummerizeLoading] = useState<boolean>(false);
    const [transcription, setTranscription] = useState<string[]>([]);
    const [title, setTitle] = useState<string>("");
    const [summarizedText, setSummarizedText] = useState<string>("");

    const toast = useRef<Toast>(null);

    const getTranscription = async () => {
        if (!url || url.trim() === "") {
            toast.current?.show({
                severity: 'warn',
                summary: 'Warning',
                detail: 'Please paste a YouTube URL!',
                life: 3000
            });
            return;
        }
        setLoading(true);
        toast.current?.show({
            severity: 'info',
            detail: "Transcript is being prepared."
        });

        try {
            const response = await TranscriptionService.getTranscription(url);
            const videoTitle = await TranscriptionService.getTitle(url);
            toast.current?.clear();
            toast.current?.show({
                severity: "success",
                detail: "Transcript process successful."
            });
            setTranscription(response);
            setTitle(videoTitle);
            setLoading(false);
            setUrl('');
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    };

    const getText = () => {
        navigator.clipboard.writeText(transcription.join(' '));
        toast.current?.show({ severity: 'success', summary: 'Copied', detail: 'Transcript copied!', life: 2000 });
    };

    const handleSummarize = async (text: string) => {
        setsummerizeLoading(true)
        try {
            const response = await TranscriptionService.getSummerize(text); 
            setSummarizedText(response);
            toast.current?.clear();
            toast.current?.show({
                severity: "success",
                detail: "Transcript summerized process successful."
            });
            setsummerizeLoading(false)
        } catch (error) {
            toast.current?.clear();
            toast.current?.show({
                severity: "danger",
                detail: "Transcript process unsuccessful." 
            });
            setsummerizeLoading(false)
        }
    };

    const handleDownloadPDF = async () => {
        try {
            await generateTranscriptPDF(title, transcription);
            toast.current?.show({
                severity: 'success',
                summary: 'PDF',
                detail: 'PDF downloaded successfully.',
                life: 2500,
            });
        } catch (error) {
            console.error(error);
            toast.current?.show({
                severity: 'error',
                summary: 'Hata',
                detail: 'An error occurred while generating the pdf.',
                life: 3000,
            });
        }
    };

    const isTranscriptionValid = transcription && transcription.join('').trim() !== '';

    return (
        <div>
            <Toast ref={toast} position="top-right" />
            <div className="center-page">
                <div className='chat-box'>
                    <LogoBar />
                    <div className="p-inputgroup">
                        <InputText
                            className='url-box'
                            placeholder="Paste YouTube URL..."
                            value={url}
                            onChange={e => setUrl(e.target.value)}
                        />
                        <Button
                            icon="pi pi-arrow-right"
                            loading={loading}
                            className="p-button-lg p-button-warning enter-button"
                            onClick={getTranscription}
                        />
                    </div>
                    
                    {transcription && transcription.length > 0 && (
                        <div className="fade-in-up">
                            <ScrollPanel className='transcription-container' style={{ width: '100%', height: '20rem', padding: '0px' }}>
                                <div className="transcription-content">
                                    <div className="content-header" style={{ padding: "1rem" }}>
                                        <span>{title}</span>
                                    </div>
                                    <p className="transcription-text" style={{ paddingLeft: "1rem" }}>
                                        {transcription.join(' ')}
                                    </p>
                                </div>
                            </ScrollPanel>

                            <div style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '0.2rem', marginTop: "0.2rem", marginBottom: "1rem" }}>
                                <Button
                                    label="PDF"
                                    icon="pi pi-file-pdf"
                                    severity="warning"
                                    onClick={handleDownloadPDF}
                                />
                                <Button
                                    label="Copy"
                                    icon="pi pi-clone"
                                    severity="danger"
                                    onClick={getText}
                                />
                                {isTranscriptionValid && (
                                    <Button 
                                        label="Summarize" 
                                        icon="pi pi-sparkles" 
                                        severity="success"
                                        onClick={() => handleSummarize(transcription.join(' '))} 
                                        loading={summerizeLoading}
                                    />
                                )}
                            </div>
                            
                            {summarizedText && (
                                <ScrollPanel className='transcription-container' style={{ width: '100%', height: '10rem', padding: '0px' }}>
                                    <div className="transcription-content" style={{ padding: "1rem" }}>
                                    <div className="content-header" style={{ padding: "1rem" }}>
                                        <span>Summary: {title}</span>
                                    </div>
                                        <p>{summarizedText}</p>
                                    </div>
                                </ScrollPanel>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HomePage;