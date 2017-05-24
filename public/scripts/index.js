const articles = [...document.getElementsByTagName('article')];

articles.forEach(  (c)=> {                        
                        c.addEventListener('mouseenter', (e) => {
                            let content = e.target.getElementsByClassName('content');
                            let title = e.target.getElementsByTagName('h2');
                            content[0].setAttribute('style', 'background: #333;');
                            title[0].setAttribute('style', 'color: white;');
                        });
                        c.addEventListener('mouseleave', (e) => {
                            let content = e.target.getElementsByClassName('content');
                            let title = e.target.getElementsByTagName('h2');
                            content[0].setAttribute('style', 'background: white;');
                            title[0].setAttribute('style', 'color: black;');
                        });
                    }
                );