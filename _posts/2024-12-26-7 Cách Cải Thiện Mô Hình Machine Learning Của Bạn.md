---
title: "7 Cách Cải Thiện Mô Hình Machine Learning Của Bạn"
date: 2024-12-26
categories: [AI,ML]
tags: [AI,Machine learning]
description: "Mô hình ban đầu có thể không đủ độ chính xác, dẫn đến kết quả không mong muốn do đó cải thiện mô hình giúp tăng độ chính xác và đáng tin cậy. Ngoài ra  dữ liệu và yêu cầu kinh doanh luôn thay đổi nên đòi hỏi cải thiện mô hình giúp nó thích nghi với những thay đổi này"
---
1️⃣ Làm sạch dữ liệu
Làm sạch dữ liệu là phần quan trọng nhất. Bạn cần điền vào các giá trị bị thiếu, xử lý các giá trị ngoại lệ, chuẩn hóa dữ liệu và đảm bảo tính hợp lệ của dữ liệu. Đôi khi, việc làm sạch dữ liệu bằng một script Python không thực sự hiệu quả. Bạn phải xem xét từng mẫu một để đảm bảo không có vấn đề gì. Tôi biết điều này sẽ tốn nhiều thời gian của bạn, nhưng tin tôi đi, làm sạch dữ liệu là phần quan trọng nhất trong hệ sinh thái học máy.
Ví dụ, khi tôi huấn luyện một mô hình Nhận dạng Giọng nói Tự động (Automatic Speech Recognition), tôi phát hiện ra nhiều vấn đề trong tập dữ liệu mà không thể giải quyết chỉ bằng cách xóa ký tự. Tôi đã phải nghe các tệp âm thanh và viết lại các bản chép lời chính xác. Có một số bản chép lời khá mơ hồ và không có ý nghĩa.

2️⃣ Thêm Dữ liệu
Tăng cường khối lượng dữ liệu thường có thể dẫn đến hiệu suất mô hình được cải thiện. Việc thêm nhiều dữ liệu có liên quan và đa dạng hơn vào tập huấn luyện có thể giúp mô hình học được nhiều mẫu hơn và đưa ra dự đoán tốt hơn. Nếu mô hình của bạn thiếu sự đa dạng, nó có thể hoạt động tốt trên lớp đa số nhưng kém hiệu quả trên lớp thiểu số.
Nhiều nhà khoa học dữ liệu hiện nay đang sử dụng Mạng Đối Kháng Tạo Sinh (Generative Adversarial Networks - GAN) để tạo ra các tập dữ liệu đa dạng hơn. Họ đạt được điều này bằng cách huấn luyện mô hình GAN trên dữ liệu hiện có và sau đó sử dụng nó để tạo ra một tập dữ liệu tổng hợp.

3️⃣ Kỹ Thuật Đặc Trưng
Kỹ thuật đặc trưng bao gồm việc tạo ra các đặc trưng mới từ dữ liệu hiện có và loại bỏ những đặc trưng không cần thiết, góp phần ít vào quá trình ra quyết định của mô hình. Điều này cung cấp cho mô hình thông tin liên quan hơn để đưa ra dự đoán chính xác.
Bạn cần thực hiện phân tích SHAP, xem xét phân tích tầm quan trọng của đặc trưng, và xác định những đặc trưng nào quan trọng đối với quá trình ra quyết định. Sau đó, chúng có thể được sử dụng để tạo ra các đặc trưng mới và loại bỏ những đặc trưng không liên quan ra khỏi tập dữ liệu. Quá trình này đòi hỏi sự hiểu biết sâu sắc về trường hợp sử dụng kinh doanh và từng đặc trưng chi tiết. Nếu bạn không hiểu các đặc trưng và cách chúng hữu ích cho doanh nghiệp, bạn sẽ đi vào con đường mù mờ.

4️⃣ Cross-Validation
Cross-validation là một kỹ thuật được sử dụng để đánh giá hiệu suất của mô hình trên nhiều tập con của dữ liệu, giúp giảm thiểu rủi ro overfitting và cung cấp một ước tính đáng tin cậy hơn về khả năng tổng quát hóa của mô hình. Phương pháp này sẽ cho bạn biết liệu mô hình của bạn có đủ ổn định hay không.
Việc tính toán độ chính xác trên toàn bộ tập kiểm tra có thể không cung cấp đầy đủ thông tin về hiệu suất của mô hình. Ví dụ, một phần năm đầu tiên của tập kiểm tra có thể cho thấy độ chính xác 100%, trong khi phần năm thứ hai có thể hoạt động kém với chỉ 50% độ chính xác. Mặc dù vậy, độ chính xác tổng thể vẫn có thể khoảng 85%. Sự khác biệt này chỉ ra rằng mô hình không ổn định và cần thêm dữ liệu sạch và đa dạng hơn để tái huấn luyện.
Vì vậy, thay vì chỉ thực hiện một đánh giá đơn giản, tôi khuyên bạn nên sử dụng cross-validation và áp dụng nó với nhiều chỉ số khác nhau để kiểm tra mô hình.

5️⃣ Tối Ưu Hóa Siêu Tham Số
Việc huấn luyện mô hình với các tham số mặc định có vẻ đơn giản và nhanh chóng, nhưng bạn sẽ bỏ lỡ cơ hội cải thiện hiệu suất, vì trong hầu hết các trường hợp, mô hình của bạn chưa được tối ưu hóa. Để tăng hiệu suất của mô hình trong quá trình kiểm tra, việc thực hiện tối ưu hóa siêu tham số cho các thuật toán học máy một cách kỹ lưỡng là rất được khuyến nghị. Ngoài ra, bạn nên lưu các tham số đã tối ưu để có thể sử dụng chúng cho lần huấn luyện hoặc tái huấn luyện mô hình sau này.
Tuning siêu tham số liên quan đến việc điều chỉnh các cấu hình bên ngoài để tối ưu hóa hiệu suất của mô hình. Việc tìm ra sự cân bằng hợp lý giữa overfitting và underfitting là rất quan trọng để cải thiện độ chính xác và độ tin cậy của mô hình. Đôi khi, việc tối ưu hóa siêu tham số có thể nâng cao độ chính xác của mô hình từ 85% lên 92%, điều này rất đáng kể trong lĩnh vực học máy.

6️⃣ Thử Nghiệm Với Các Thuật Toán Khác Nhau
Việc lựa chọn mô hình và thử nghiệm với các thuật toán khác nhau là rất quan trọng để tìm ra giải pháp phù hợp nhất với dữ liệu. Đừng giới hạn bản thân chỉ trong các thuật toán đơn giản cho dữ liệu dạng bảng. Nếu dữ liệu của bạn có nhiều đặc trưng và 10 nghìn mẫu, bạn nên xem xét sử dụng mạng nơ-ron. Đôi khi, ngay cả hồi quy logistic cũng có thể mang lại kết quả tuyệt vời cho việc phân loại văn bản mà các mô hình học sâu như LSTM không thể đạt được.
Hãy bắt đầu với các thuật toán đơn giản và sau đó dần dần thử nghiệm với các thuật toán nâng cao để đạt được hiệu suất tốt hơn.

7️⃣ Ensembling
Ensemble learning bao gồm việc kết hợp nhiều mô hình khác nhau để cải thiện hiệu suất dự đoán tổng thể. Việc xây dựng một tập hợp các mô hình, mỗi mô hình có những điểm mạnh riêng, có thể dẫn đến các mô hình ổn định và chính xác hơn.
Ensembling các mô hình đã nhiều lần mang lại cho tôi kết quả cải thiện, đôi khi giúp tôi đạt được vị trí trong top 10 trong các cuộc thi học máy. Đừng loại bỏ những mô hình có hiệu suất thấp; hãy kết hợp chúng với nhóm các mô hình có hiệu suất cao, và độ chính xác tổng thể của bạn sẽ tăng lên.
Ensembling, làm sạch dữ liệu và kỹ thuật đặc trưng đã là ba chiến lược tốt nhất của tôi để giành chiến thắng trong các cuộc thi và đạt được hiệu suất cao, ngay cả trên các tập dữ liệu chưa từng thấy.

From : Vietnam Data Analyst Forum - UniGap
