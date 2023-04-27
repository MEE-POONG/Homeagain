import LayOut from "../../components/LayOut";

export default function NewsPage() {
    return (
        <>
            <LayOut>
                {/* Page Header */}
                <div className="container-fluid py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                    <h1 className="display-3 text-info mb-4">ข่าวสารและกิจกรรม</h1>
                </div>
            </LayOut>
        </>
    )
}