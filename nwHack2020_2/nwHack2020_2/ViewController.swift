

import UIKit
import Vision
import VisionKit

class ViewController: UIViewController, VNDocumentCameraViewControllerDelegate {
    
    @IBOutlet var imageView: BoundingBoxImageView!
    @IBOutlet var textView: UITextView!
    @IBOutlet var progressIndicator: UIProgressView!
    @IBOutlet var scanButton: UIButton!
    
    var textRecognitionRequest = VNRecognizeTextRequest(completionHandler: nil)
    private let textRecognitionWorkQueue = DispatchQueue(label: "TextRecognitionQueue", qos: .userInitiated, attributes: [], autoreleaseFrequency: .workItem)
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
//        self.view.backgroundColor = gradientColor
//        self.loginButton.layer.insertSublayer(gradientColor, at: 0)
//        view.backgroundColor = CGGradient(
        textView.layer.backgroundColor = .none
        textView.isScrollEnabled = true
        textView.isHidden = true
//        textView.textContainerInset = UIEdgeInsets(top: 10, left: 8, bottom: 10, right: 8)
//        textView.layer.cornerRadius = 10.0
        
//        imageView.layer.cornerRadius = 10.0
        scanButton.layer.cornerRadius = 10.0
        
        scanButton.addTarget(self, action: #selector(scanDocument), for: .touchUpInside)
        
        setupVision()
    }
    
    private func setupVision() {
        textRecognitionRequest = VNRecognizeTextRequest { (request, error) in
            guard let observations = request.results as? [VNRecognizedTextObservation] else { return }
            
            var detectedText = ""
            var boundingBoxes = [CGRect]()
            for observation in observations {
                guard let topCandidate = observation.topCandidates(1).first else { return }
                
                detectedText += topCandidate.string
                detectedText += "\n"
                
                do {
                    guard let rectangle = try topCandidate.boundingBox(for: topCandidate.string.startIndex..<topCandidate.string.endIndex) else { return }
                    boundingBoxes.append(rectangle.boundingBox)
                } catch {

                    print(error)
                }
            }
            
            DispatchQueue.main.async {
                self.scanButton.isEnabled = true
                self.progressIndicator.progress = 1
                self.textView.isHidden = false
//                self.textView.text = detectedText
//                self.textView.flashScrollIndicators()
                
//                self.imageView.load(boundingBoxes: boundingBoxes)
            }
        }
        
        
        textRecognitionRequest.recognitionLevel = .accurate
    }
    
    @objc func scanDocument() {
        let scannerViewController = VNDocumentCameraViewController()
        scannerViewController.delegate = self
        present(scannerViewController, animated: true)
    }

    private func processImage(_ image: UIImage) {
//        imageView.image = image
//        imageView.removeExistingBoundingBoxes()
        
        recognizeTextInImage(image)
    }
    
    private func recognizeTextInImage(_ image: UIImage) {
        guard let cgImage = image.cgImage else { return }
        
//        textView.text = ""
        scanButton.isEnabled = false
        progressIndicator.progress = 0
        
        textRecognitionWorkQueue.async {
            let requestHandler = VNImageRequestHandler(cgImage: cgImage, options: [:])
            do {
                try requestHandler.perform([self.textRecognitionRequest])
            } catch {
                print(error)
            }
        }
    }
    

    func documentCameraViewController(_ controller: VNDocumentCameraViewController, didFinishWith scan: VNDocumentCameraScan) {
        
        guard scan.pageCount >= 1 else {
            
            controller.dismiss(animated: true)
            return
        }
        
        let originalImage = scan.imageOfPage(at: 0)
        let fixedImage = reloadedImage(originalImage)
        
        controller.dismiss(animated: true)
        
        processImage(fixedImage)
    }
    
    func documentCameraViewController(_ controller: VNDocumentCameraViewController, didFailWithError error: Error) {

        print(error)
        
        controller.dismiss(animated: true)
    }
    
    func documentCameraViewControllerDidCancel(_ controller: VNDocumentCameraViewController) {
        controller.dismiss(animated: true)
    }
    
    
    func reloadedImage(_ originalImage: UIImage) -> UIImage {
        guard let imageData = originalImage.jpegData(compressionQuality: 1),
            let reloadedImage = UIImage(data: imageData) else {
                return originalImage
        }
        return reloadedImage
    }
//    func setGradientBackground(colorTop: UIColor, colorBottom: UIColor){
//        let gradientLayer = CAGradientLayer()
//        gradientLayer.colors = [colorTop.cgColor, colorBottom.cgColor]
//        gradientLayer.startPoint = CGPoint(x: 0.5, y: 1.0)
//        gradientLayer.endPoint = CGPoint(x: 0.5, y: 0.0)
//        gradientLayer.locations = [NSNumber(floatLiteral: 0.0), NSNumber(floatLiteral: 1.0)]
////        gradientLayer.frame = 
//
//        self.view.layer.insertSublayer(gradientLayer, at: 0)
//    }
}

