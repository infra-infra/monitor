class Tracker {
    url: string

    constructor() {
        this.url = 'https://www.google-analytics.com/collect';
    }
    send(json:any){
        new Image().src = `https://log.zzfzzf.com/zzf.gif?body=${window.btoa(
            JSON.stringify(json),
        )}&index=log-performance`
    }
}

export default Tracker
