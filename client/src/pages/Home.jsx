import React , {useState,useEffect } from 'react';
import {Loader,Card, FormField} from '../components'



const RenderCard = ({data,title}) => {
    if(data?.lenght > 0) {
        return data.map((post) => <Card key={post._id}  {...post} /> )
    }
    return (
        <h2 className="mt-5 font-bold text-black text-xl uppercase">{title}</h2>
    )
}
const Home = () => {

    const [loading,setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);
    const [searchText, setSearchText] = useState("mahamat kabir");



  return (
    <section>
        <div>
            <h1 className="font-extrabold text-black text-[32px]">
            The community showcase
            </h1>
            <p className="mt-2 text-black text-[16px] max-w[500px]">
                      Browse through the community generate by DALL-E AI
            </p>
        </div>
        <div className="mt-16">
            <FormField />
        </div>

        <div className="mt-10">
            {loading ? (
                <div className="flex justify-center items-center">
                    <Loader />
                </div>
            ) : (
                <>
                     {searchText && (
                        <h2 className="font-meduim text-[#666e75] text-xl mb-3">
                            Showing result for 
                            <span className="text-black">{searchText}</span>
                        </h2>
                     )}
                     <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3" >
                        {searchText ? (
                        <RenderCard data={[]} title="No serach result found" /> 
                        ) : (
                            < RenderCard data={[]} title="No Posts Found" />
                        )}
                        
                     </div>
                </>
            )}
        </div>

    </section>
  )
}

export default Home