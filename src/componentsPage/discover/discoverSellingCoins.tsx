import { Avatar, AvatarImage } from "@/components/ui/avatar";
import image1 from "../../assets/b1.jpg";
import image2 from "../../assets/b2.png";
import { Link } from "react-router-dom";
export const SellcoinsData=()=>{
const data=[
    {
        name:"world coin",
        image:image1,
        quantity:10,
        price:12
    },
    {
        name:"fairtrade coin",
        image:image2,
        quantity:1,
        price:14
    },
    {
        name:"icp coin",
        image:image2,
        quantity:4,
        price:15
    },
    {
        name:"icp cojin",
        image:image2,
        quantity:4,
        price:15
    },
    {
        name:"icp cokin",
        image:image2,
        quantity:4,
        price:15
    },
    {
        name:"icp cojopin",
        image:image2,
        quantity:4,
        price:15
    }
]
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-9 gap-4 pb-6 ">
            {data.map(dat=>(
                <Link to="" key={dat.name}>
                    <div className="flex space-x-2 border-b">
                        <Avatar>
                            <AvatarImage src={dat.image}/>
                        </Avatar>
                        <div>
                            <h1>{dat.name}</h1>
                            <p>vol:{dat.quantity}</p>
                            <p className="text-gray-400">${dat.price}.00</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}