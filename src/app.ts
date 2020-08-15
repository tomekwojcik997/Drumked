export class App {
    channel1: string [] = [];
    constructor() {
        this.start();
    }
    start() {
        document.addEventListener('keydown',(e)=> {this.onKeyDown(e)})
        document.querySelector('#playBtn').addEventListener('click',this.playChanel1);
    }
    playChanel1(): void {
        this.channel1.forEach( sound => () {
            this.playAudio('sound');
        } )
    }
    onKeyDown(e: KeyboardEvent) {
        const key = e.key
        switch(key){
            case 'a':
                this.playAudio('boomAudio');
                this.recordSound('boomAudio');
                break;
            case 's':
                this.playAudio('clapAudio');
                this.recordSound('clapAudio');
                break;
                
             case 'd':
                this.playAudio('hihatAudio');
                this.recordSound('hihatAudio');
                break;
                
            case 'f':
                this.playAudio('kickAudio');
                this.recordSound('kickAudio');
                break;
                
            case 'g':
                this.playAudio('openhatAudio');
                this.recordSound('openhatAudio');
                break;
                
            case 'h':
                this.playAudio('rideAudio');
                this.recordSound('rideAudio');
                break;
                
            case 'j':
                this.playAudio('snareAudio');
                this.recordSound('snareAudio');
                break;

            case 'k':
                this.playAudio('tinkAudio');
                this.recordSound('tinkAudio');
                break;
                
            case 'l':
                this.playAudio('tomAudio');
                this.recordSound('tomAudio');
                break;
                
        }
        
    }
    playAudio(id: string){
        const clap: HTMLAudioElement = document.querySelector('#'+ id);
                clap.currentTime = 0;
                clap.play();
    }
      recordSound(id:string) {
        this.channel1.push(id);
    }
}
