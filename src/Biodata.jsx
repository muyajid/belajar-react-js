import './Biodata.css';

export function Biodata() {
    return (
        <>
        <h1>Biodata Pribadi Ku</h1>
        <div id="biodata-container">
            <div id="img-container">
                <img src="/badenglish.jpeg" alt="foto-profile" width={"200px"} height={"200px"}/>
            </div>
            <div id="bio-container">
                <ul>
                    <li><span>Nama  :</span>    M. Yazid Arsy</li>
                    <li><span>Umur  :</span>    15 Th</li>
                    <li><span>Asal  :</span>    Malang, Jawa Timur</li>
                    <li><span>Sekolah   :</span>    SMK RUS KUDUS</li>
                    <li><span>No Hp :</span>    0821-3262-0818</li>
                    <li><span>Hobi  :</span>    Denger Musik</li>
                </ul>
            </div>
        </div>
        </>
    )
}