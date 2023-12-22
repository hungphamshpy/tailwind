import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'

export default () => {
    return <div className="dashboard-container w-screen h-screen bg-primary_purple-600 text-h flex">
        <div className="w-1/5" >
            đá
        </div>
        <div className="w-4/5 bg-primary_white rounded-xl p-3">
            <div>
                <h1 className="font-bold text-xl">Overview</h1>
                <div>
                    <div className="w-96 h-12 flex items-center box-border px-1 bg-primary_purple-200 rounded-full">
                        <input type="text" className="w-full outline-0 bg-transparent px" />
                        <FontAwesomeIcon icon="fa-brands fa-google" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}