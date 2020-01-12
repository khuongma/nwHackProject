//
//  ContentView.swift
//  nwHack3
//
//  Created by Minjae Shin on 2020-01-12.
//  Copyright © 2020 Minjae Shin. All rights reserved.
//

import SwiftUI



struct ContentView: View {
    @State var image: Image? = nil
    @State var showCaptureImageView: Bool = false
    
    var body: some View {
      ZStack {
        VStack {
          Button(action: {
            self.showCaptureImageView.toggle()
          }) {
            Text("Choose photos")
          }
          image?.resizable()
            .frame(width: 250, height: 200)
            .clipShape(Circle())
            .overlay(Circle().stroke(Color.white, lineWidth: 4))
            .shadow(radius: 10)
        }
        if (showCaptureImageView) {
          CaptureImageView(isShown: $showCaptureImageView, image: $image)
        }
      }
    }
//    var body: some View {
//        ZStack{
//            VStack{
//                Button(action: {
//                    self.showCaptureImageView.toggle()
//                                    }) {
//                    HStack{
//                        Text("take photo")
//                    }
//                    .padding()
//                    .foregroundColor(.white)
//                    .background(LinearGradient(gradient: Gradient(colors: [Color.red, Color.blue]), startPoint: .leading, endPoint: .trailing))
//                    .cornerRadius(40)
//
//                }
//                image?.resizable()
//                .frame(width: 250, height: 250)
//                .clipShape(Circle())
//                .overlay(Circle().stroke(Color.white, lineWidth: 4))
//                .shadow(radius: 10)
//            }
//        }
//        if (showCaptureImageView) {
//          CaptureImageView(isShown: $showCaptureImageView, image: $image)
//        }
//    }
}


struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

struct CaptureImageView {
    
    /// MARK: - Properties
    @Binding var isShown: Bool
    @Binding var image: Image?
    
    func makeCoordinator() -> Coordinator {
      return Coordinator(isShown: $isShown, image: $image)
    }
}

extension CaptureImageView: UIViewControllerRepresentable {
    func makeUIViewController(context: UIViewControllerRepresentableContext<CaptureImageView>) -> UIImagePickerController {
        let picker = UIImagePickerController()
        picker.delegate = context.coordinator
        picker.sourceType = .camera
        return picker
    }
    
    func updateUIViewController(_ uiViewController: UIImagePickerController,
                                context: UIViewControllerRepresentableContext<CaptureImageView>) {
        
    }
}
