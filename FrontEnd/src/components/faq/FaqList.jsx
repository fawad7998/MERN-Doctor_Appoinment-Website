import { faqs } from "./../../assets/data/faqs";
import FasqItem from "./FasqItem";


function FaqList() {
    return (
        <>
            <ul className="mt-[38px]">
                {faqs.map((item, index) => <FasqItem item={item} key={index} />)}
            </ul>
        </>
    )
}

export default FaqList
