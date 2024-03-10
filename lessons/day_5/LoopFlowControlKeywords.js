for (let number = 0; number < 5; number++) {
    // Gặp số 3 - bỏ qua
    if(number===3){
       // break; // đến số 3 thì nhảy ra khỏi vòng lặp - chào 0, 1, 2
        continue // chào 0, 1, 2, 4
    }
    //thu tuc bat tay chao hoi
    console.log('Xin chao anh, so', number);
}