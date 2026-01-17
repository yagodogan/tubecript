import  { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import LogoBar from "../components/logo-bar/LogoBar"
import './HomePage.css'
import TranscriptionService from '../services/transcriptionService';
import { ScrollPanel } from 'primereact/scrollpanel';

function HomePage(){

const [url, setUrl] = useState<string>("");
const [loading, setLoading] = useState<boolean>(false);
const [transcription, setTranscription] = useState<string[]>([])

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
    setLoading(true)


    try{
        const response = await TranscriptionService.getTranscription(url);
        setTranscription(response)
        setLoading(false)
        setUrl('')
    }catch(e){
        console.log(e)
    }
}
return (
    <div>
    <Toast ref={toast} position="top-right" />
    <div className="center-page">     
        <div className='chat-box'>
        <LogoBar></LogoBar>
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
            <ScrollPanel className='transcription-scroll-panel' style={{ width: '100%', height: '20rem' }}>
                <div className="space-y-2">
                    <p>{transcription.join(' ')}</p>
                </div>
            </ScrollPanel>
        </div>
    </div>
    </div>
)
}

export default HomePage;