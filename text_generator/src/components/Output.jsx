/* eslint-disable react/prop-types */

// Output bileşeni, kullanıcının oluşturduğu metinleri görüntülediği yerdir.
const Output = ({ paragraphs, tag, includeHtml }) => {
    return (
        <div className="output">
            {/* HTML dahil etme seçeneğine bağlı olarak metinleri görüntüleme */}
            {includeHtml === "Yes" ? (
                <p>{paragraphs.map(sentence => `<${tag}>${sentence}</${tag}>`)}</p>
            ) : (
                <p>{paragraphs.map((sentence) => {
                    return `${sentence}`
                })}</p>
            )}
        </div>
    );
}

export default Output;
