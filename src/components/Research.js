import React from "react"

function Research() {
    return (
        <div className="research" id="research">
            <h1>Research</h1>
            <div className="research-experience">
                <img src="https://julien-vitay.net/project/reservoircomputing/featured.jpg"></img>
                <h3>Skyrmion Reservoir Computing</h3>
                <p><em>NeuroSpin Compute Laboratory</em></p>
                <p>
                    Investigating the use of reservoir computing (RC) models in improving the performance of
                    recursive neural networks (RNN) for spatial temporal event recognition and prediction and 
                    minimizing the training of the neural network. Focusing on the implementation of RC models 
                    based on magnetic skyrmions and the complex current patterns that form in them.  
                </p>
            </div>
            <div className="research-experience">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTObJz-wbhssoNOxltahn0eRRofjF8FAM0yw&usqp=CAU"></img>
                <h3>Convolutional Neural Network for Retinal OCT Classification</h3>
                <p><em>ACM Research program Fall 2020</em></p>
                <p>
                    Collaborated with a team to develop the most efficient convolutional neural network model to
                    classify common diseases from retinal OCT scans and achieved an accuracy of 94%. Check out this  
                    <a 
                        href="https://github.com/ACM-Research/image-classification-cnn/blob/master/README.md"
                        target="_blank">
                        poster
                    </a> 
                     for more information.
                </p>
            </div>
        </div>
    );
}

export default Research;