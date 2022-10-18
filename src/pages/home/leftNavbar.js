import "./leftPanel.css"

const LeftNavbar = () => {

    return(
        <div className="settings_panel card no_margin">
            <h3 className="background_color light_blue">Üye Olmanın Faydaları</h3>

            <div>
                <ul className="panel svg_check no_scroll">
                    <li><span className="glyphicons_v2 check"></span> Find something to watch on your subscribed
                        streaming services
                    </li>
                    <li><span className="glyphicons_v2 check"></span> İzlediğiniz filmleri ve TV şovlarını kaydetme</li>
                    <li><span className="glyphicons_v2 check"></span> En sevdiğiniz filmleri ve TV şovlarını takip edin
                        ve bunlardan öneriler alın
                    </li>
                    <li><span className="glyphicons_v2 check"></span> Kişisel bir izleme listesi oluşturun ve sürdürün
                    </li>
                    <li><span className="glyphicons_v2 check"></span> Özel karışık listeler oluşturun (filmler ve TV)
                    </li>
                    <li><span className="glyphicons_v2 check"></span> Film ve TV tartışmalarına katılın</li>
                    <li><span className="glyphicons_v2 check"></span> Veritabanımızdaki bilgileri katkıda bulun ve
                        geliştirin
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default LeftNavbar