class Resources {
    constructor() {
        // plan to download
        this.toLoad = {
            player: '/player.png'
        }
        // a bucket to keep all our images
        this.images = {}
        // Load each image
        Object.keys(this.toLoad).forEach( key=> {
            const  img = new  Image()
            img.src = this.toLoad[key]
            this.images[key] = {
                image: img,
                isLoaded: false
            }
            img.onload = () => {
                this.images[key].isLoaded = true
            }
        })
    }

}

export  const  resources = new Resources()