/* eslint-disable react/prop-types */
import { CopyToClipboard } from 'react-copy-to-clipboard';

// Options bileşeni, kullanıcının metin oluşturma seçeneklerini ayarladığı yerdir.
const Options = ({ paragraphs, tag, setTag, inputVal, setInputVal, includeHtml, setIncludeHtml }) => {
    return (
        <div className="options">
            <div className="wrapper">
                <div className="optionsContainer">
                    {/* Paragraf sayısını ayarlamak için giriş alanı */}
                    <div className="paragraphs">
                        <p>Paragraphs : </p>
                        <input
                            type='number'
                            value={inputVal}
                            onChange={event => setInputVal(event.target.value)}
                        />
                    </div>
                    {/* Etiketi seçmek için açılır liste */}
                    <div className="tags">
                        <p>Tags: </p>
                        <select defaultValue={tag} onChange={event => setTag(event.target.value)}>
                            <option value="p">&lt;p&gt;</option>
                            <option value="h1">&lt;h1&gt;</option>
                            <option value="h2">&lt;h2&gt;</option>
                            <option value="h3">&lt;h3&gt;</option>
                            <option value="h4">&lt;h4&gt;</option>
                            <option value="h5">&lt;h5&gt;</option>
                            <option value="h6">&lt;h6&gt;</option>
                            <option value="span">&lt;span&gt;</option>
                        </select>
                    </div>
                    {/* HTML dahil etme seçeneğini seçmek için açılır liste */}
                    <div className="include">
                        <p>Include HTML: </p>
                        <select
                            defaultValue={includeHtml}
                            onChange={event => setIncludeHtml(event.target.value)}
                        >
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                        </select>
                    </div>
                </div>
                {/* Metinleri panoya kopyalamak için bir düğme */}
                <div className="copy">
                    <CopyToClipboard
                        text={paragraphs.map((sentence) => {
                            return includeHtml === "Yes" ? `<${tag}>${sentence}</${tag}>` : `${sentence}`
                        })}
                    >
                        <button>Copy to clipboard</button>
                    </CopyToClipboard>
                </div>
            </div>
        </div>
    )
}

export default Options;
