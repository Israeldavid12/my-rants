import img_teste from '../assets/img_teste.jpg'
import { useState, useRef } from 'react'



function Post() {
    return (
        <div className='flex flex-col justify-items-start gap-3  p-2 mt-4 text-sm'>
            <hr className="border-[silver]" />
            <div className='flex gap-3 items-center  text-sm'>
                <img
                    src={img_teste}   
                    alt="Perfil"
                    className="w-8 h-8 rounded-full object-cover"
                />
                <p className='text-white cursor-pointer '>
                    <a href="/r/israeldavide234" className="hover:underline cursor-pointer ">
                        r/israeldavide234
                    </a>
                </p>
                <p>&middot;</p>
                <p>4d</p>
                <p>&middot;</p>
                <p className='text-red-500 font-bold cursor-pointer'>Adicionar</p>
            </div>
            <div>
                <p className='text-white text-start text-sm lg:max-w-[450px] sm:max-w-[300px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>

                <img src={img_teste} alt="Imagem do post"
                    className="lg:max-w-[450px] sm:max-w-[300px] h-auto mt-4" />
            </div>

            <div className='flex items-center gap-1 text-white '>
                <div className='flex items-center gap-1 text-sm  cursor-pointer'>
                    <i class="bi bi-chat"></i>
                    <p>123</p>
                </div>
                <div className='flex items-center gap-1 text-sm  cursor-pointer'>
                    <i class="bi bi-arrow-up"></i>
                    <p>456</p>
                </div>
                <div className='flex items-center gap-1 text-sm  cursor-pointer'>
                    <i class="bi bi-arrow-down"></i>
                    <p>789</p>
                </div>
            </div>
        </div>
    )
}




export default function Home() {
    const [posts, setPosts] = useState([]);
    const inputRef = useRef(null);

    const handleAddPost = () => {
       window.location.href = '/home/make-post';
    }




    return (
        <div className="flex flex-col  items-center gap-2  p-2 ">
            <div className='flex items-center gap-3 bg-[#252728] p-2 rounded-lg text-sm lg:max-w-[450px] sm:max-w-[300px] w-full'>
                <img
                    src={img_teste}
                    alt="Perfil"
                    className="w-8 h-8 rounded-full object-cover"
                />
                <input
                    onClick={handleAddPost}
                    type="text"
                    placeholder="Digite algo..."
                    className='rounded-full px-2 outline-none h-[36px] focus:ring-2 focus:ring-blue-500 
                    hover:bg-gray-600 ' />

                <i class="bi bi-image-fill"></i>
                <i class="bi bi-emoji-laughing-fill"></i>

            </div>
            <Post />
            <Post />
            <Post />
        </div>
    )
}