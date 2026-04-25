import { useParams } from "react-router-dom"
import img_teste from '../assets/img_teste.jpg'

export default function UserProfile() {
    const { id } = useParams();
    return (
        <div className="flex gap-2 p-2 items-center text-white text-sm justify-center py-4">
            <i class="bi bi-arrow-left cursor-pointer " onClick={() => window.history.back()}></i>
            <img src={img_teste} alt="Perfil"
                className="w-14 h-14 rounded-full object-cover" />
            <div className="flex  flex-col gap-3 align-start justify-start">
                <h1 className="text-lg text-start font-bold">{id}</h1>
                <div className="flex gap-4 mt-2">
                    <p className="text-gray-500">123 seguidores</p>
                    <p className="text-gray-500">456 seguindo</p>
                    <p className="text-gray-500">789 posts</p>
                </div>
                <div className="self-start">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg">Adicionar</button>
                </div>
            </div>


        </div>
    )
}