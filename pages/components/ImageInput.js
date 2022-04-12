import { useState } from "react";

export default function ImageInput(props) {
    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const [prodURL, setProdURL] = useState(null);

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    }

    const uploadToServer = async (event) => {
        const body = new FormData();
        body.append("file", image);
        const response = await fetch("/api/image", {
            method: "POST",
            body
        })
        .then(res => res.json())
        .then(res => {
            console.log(res.path);
            setProdURL(res.path);
        })
    }

    return (
        <div>
            <img src={prodURL} />
            <input type="file" name="userImage" accept="image/png" multiple={false} onChange={uploadToClient} />
            <button className="btn btn-primary" type="submit" onClick={uploadToServer}>Send to server</button>
        </div>
    )
}