export default function MakePost() {

    return (
        <div className="flex flex-col  items-center gap-2  p-2 ">
            <div className='flex items-center justify-between w-full p-2'>
                <i class="bi bi-arrow-left cursor-pointer" onClick={() => window.history.back()}></i>
                <h1 className="text-lg font-bold">Conte seu desabafo aqui!</h1>
                <button className="text-blue-500 hover:text-blue-700 font-bold px-4 py-2 rounded-lg">Publicar</button>
            </div>

            <textarea 
            name="" 
            id="" 
            placeholder="Como vai o seu dia?"
            className="bg-[#252728] text-white placeholder:text-gray-500 border border-gray-600  focus:outline-none p-2 rounded-lg w-full lg:max-w-[450px] sm:max-w-[300px] h-40 resize-none">
                
            </textarea>   

            <div>
                <input type="file" name="" id="" accept="image/*" />
            </div>

            
{/* 
            <div className="w-full lg:max-w-[450px] sm:max-w-[300px] p-2 rounded-lg flex items-start gap-2">
                <input type="file" id="fileInput" className="hidden" accept="image/*" />
                <label htmlFor="fileInput" className="text-start cursor-pointer text-gray-500 hover:text-gray-700">
                    <i class="bi bi-image-fill"></i> Adicionar imagem
                </label>
            </div> */}
            

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg w-full lg:max-w-[450px] sm:max-w-[300px]">Publicar</button>

        </div>

    )
}