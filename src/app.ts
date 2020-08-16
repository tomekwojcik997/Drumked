interface ChannelSound{
    id: string;
    time: number;
}
interface KeysToAudio{
    [id: string]:string
}

export class App {
    channel1: ChannelSound[] = [];
    recStartTime: number ;
    isRecording: boolean = false;
        constructor() {
        this.start();
    }
    start() {
        document.addEventListener('keydown',(e)=> {this.onKeyDown(e)})
        document.querySelector('#playBtn').addEventListener('click',()=>{this.playChannel1()});
        document.querySelector('#recBtn').addEventListener('click',(e:MouseEvent)=>{this.recChannel1(e)});
    }
    recChannel1(e: MouseEvent):void{
        this.recStartTime=e.timeStamp;
        this.isRecording = true;

    };
    playChannel1(): void {
        this.isRecording = true;
        const sound = this.channel1[0];
        this.channel1.forEach(sound =>{ 
        setTimeout(()=>{
            this.playAudio(sound.id);
        },
        sound.time
        )
        })
    };

    onKeyDown(e: KeyboardEvent) {
        const key = e.key;
        const time = e.timeStamp - this.recStartTime;
        //let audioId : string;
        //const keys =['a','s','d','f','g','h','j','k','l'];
        //const audioIds=['boomAudio','clapAudio','hihatAudio','kickAudio','openhatAudio','rideAudio','snareAudio','tinkAudio','tomAudio'];

        //const audioIndex= keys.findIndex(el=>el===key);

        const keysToAudioId:KeysToAudio={
            'a':'boomAudio',
            's':'clapAudio',
            'd':'hihatAudio',
            'f':'kickAudio',
            'g':'openhatAudio',
            'h':'rideAudio',
            'j':'snareAudio',
            'k':'tinkAudio',
            'l':'tomAudio',
        }
           const audioId = keysToAudioId[key];
           //audioId = audioIds[audioIndex];
        
        if(audioId){
            //audioId=audioIds[audioIndex];
            this.playAudio(audioId);
            this.recordSound(audioId,time);
        }

       /* switch(key){
            case 'a':
                audioId = 'boomAudio';
                break;
            case 's':
                audioId = 'clapAudio';
                break;
                
             case 'd':
                audioId = 'hihatAudio';
                break;
                
            case 'f':
                audioId = 'kickAudio';
                break;
                
            case 'g':
                audioId = 'openhatAudio';
                break;
                
            case 'h':
                audioId = 'rideAudio';
                break;
                
            case 'j':
                audioId = 'snareAudio';
                break;

            case 'k':
                audioId = 'tinkAudio';
                break;
                
            case 'l':
                audioId = 'tomAudio';
                break;
                
        }*/
        this.playAudio(audioId);
        this.recordSound(audioId,time);
        
    }
    playAudio(id: string){
        const clap: HTMLAudioElement = document.querySelector('#'+ id);
                clap.currentTime = 0;
                clap.play();
    }
      recordSound(id:string , time:number) {
        if(this.isRecording){
        const sound : ChannelSound = {
            id,
            time
        };
        this.channel1.push(sound);}
    }
}
