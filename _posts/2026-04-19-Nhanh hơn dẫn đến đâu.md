---
title: "Nhanh hơn dẫn đến đâu ?"
date: 2026-04-19
categories: [AI]
tags: [AI,LLM]
description: "AI đang giúp chúng ta code nhanh hơn. Chắc là ít ai còn nghi ngờ điều này. Và câu hỏi tiếp theo sẽ là: nhanh hơn dẫn đến đâu?."
---
&nbsp;**Nhanh hơn dẫn đến đâu?**

AI đang giúp chúng ta code nhanh hơn. Chắc là ít ai còn nghi ngờ điều này. Và câu hỏi tiếp theo sẽ là: nhanh hơn dẫn đến đâu?

Tuần này, thay vì nói về những gì AI có thể làm được, chúng ta sẽ nhìn vào những gì đang bị bỏ qua phía sau làn sóng năng suất đó - chất lượng code thực sự, sức khỏe tinh thần của kỹ sư, và cái giá dài hạn mà cả cá nhân lẫn tổ chức đang âm thầm trả. Ba bài viết dưới đây đến từ ba góc nhìn khác nhau - một researcher, một engineering newsletter, và một kỹ sư infrastructure - giúp chúng ta hiểu rõ hơn về những vấn đề này.

[**Your LLM Doesn't Write Correct Code. It Writes Plausible Code**](https://substack.com/redirect/d5430dc1-fb7c-4240-993a-593554f86ab4?j=eyJ1IjoiMXhiYmVrIn0.lTWW3vD6qb7ZCESxguGoaB5rC86NuAUE_m6dEeWpjpk)

Bài viết **"Your LLM Doesn't Write Correct Code. It Writes Plausible Code."** của tác giả Hōrōshi (Vagabond Research) đã phân tích một vấn đề cốt lõi trong lập trình với AI: Các mô hình ngôn ngữ lớn (LLM) có xu hướng tạo ra mã nguồn **"có vẻ hợp lý"** (plausible) nhưng lại **không "chính xác"** (correct) về mặt kỹ thuật và hiệu năng.  
Cụ thể, tác giả đã giao cho LLM một nhiệm vụ là viết lại SQLite bằng Rust. Và kết quả cho thấy phiên bản này chậm hơn phiên bản gốc rất nhiều lần.

Nguyên nhân đến từ hai lỗi nghiêm trọng:

- **Lỗi lập kế hoạch truy vấn (Query Planning):** LLM không nhận diện được các cột INTEGER PRIMARY KEY để thực hiện tìm kiếm qua cây B-tree (độ phức tạp _O_(log*n*)), dẫn đến việc chương trình phải quét toàn bộ bảng (full table scan - độ phức tạp _O_(_n_)) cho mọi truy vấn WHERE.
- **Lạm dụng đồng bộ hóa dữ liệu:** Mã nguồn do AI tạo ra gọi hàm fsync cho mọi câu lệnh đơn lẻ, gây ra độ trễ cực lớn so với cách xử lý giao dịch tối ưu của SQLite.

Bài viết đề cập đến khái niệm **sycophancy** trong nghiên cứu AI: **LLM có xu hướng đưa ra câu trả lời phù hợp với mong đợi hoặc gợi ý của người dùng hơn là đưa ra sự thật khách quan.** Trong lập trình, AI sẽ nhiệt tình thực hiện mọi yêu cầu của bạn (dù yêu cầu đó tồi hoặc không cần thiết) mà không hề phản biện hay cảnh báo về những rủi ro tiềm ẩn  
Tác giả kết luận rằng LLM là công cụ mạnh mẽ nhưng cũng đầy nguy hiểm nếu người dùng không đủ khả năng xác minh kết quả. Để sử dụng hiệu quả, bạn nên:

- **Xác định tiêu chí nghiệm thu (acceptance criteria)** cụ thể về hiệu năng và bảo mật _trước khi_ yêu cầu AI tạo dòng code đầu tiên.
- **Thực hiện Benchmarking và Profiling:** Không chỉ tin vào việc code chạy được hay vượt qua test, mà phải đo lường hiệu năng thực tế dưới tải trọng thực.
- **Dùng AI như một cộng sự (co-pilot), không phải phi công tự động:** Con người phải chịu trách nhiệm cuối cùng trong việc hiểu và kiểm soát mã nguồn.

Bài viết nhấn mạnh: **"Vibe coding"** (lập trình theo cảm hứng/cảm giác) có thể tạo ra ảo giác về năng suất, nhưng thực chất đang tích tụ nợ kỹ thuật và sự kém hiệu quả cho hệ thống.

[**Are AI agents actually slowing us down?**](https://substack.com/redirect/7c578973-6020-4ced-8027-8731595945ad?j=eyJ1IjoiMXhiYmVrIn0.lTWW3vD6qb7ZCESxguGoaB5rC86NuAUE_m6dEeWpjpk)

Khi nói đến các tác nhân AI và công cụ AI, hầu hết các cuộc thảo luận đều xoay quanh một câu chuyện quen thuộc: tăng tốc độ, tối ưu vòng lặp phát triển, và tạo ra nhiều code hơn, nhanh hơn bao giờ hết.

Trong bài viết dưới đây, tác giả đã phân tích một góc nhìn ít được thảo luận hơn: liệu làn sóng AI có đang âm thầm kéo chất lượng sản phẩm đi xuống? Một số điểm nổi bật được tác giả đề cập:

- **Anthropic** - Flagship site bị xuống cấp thầm lặng dù hơn 80% code sản phẩm được viết bởi chính Claude
- **Amazon** - Sự cố do AI agents gây ra tăng đột biến, đến mức các thay đổi có AI hỗ trợ giờ cần phê duyệt từ senior management
- **Meta & Uber** - Áp lực "dùng AI hoặc bị đánh giá kém" trong performance review, bất chấp tác động đến chất lượng
- **OpenCode** - Người tạo ra tool cảnh báo AI đang hạ thấp tiêu chuẩn release và triệt tiêu động lực refactor
- **Các startup** - CTO của Sentry và nhiều founder khác nhận ra AI tạo ra codebase cồng kềnh, kéo chậm tốc độ phát triển dài hạn
- **Nghiên cứu** - Dữ liệu cho thấy lợi thế tốc độ ngắn hạn thường đi kèm với sự bùng nổ technical debt phía sau

Tác giả cũng đề xuất một số hướng giải quyết, từ việc đề cao vai trò của kỹ sư có tư duy kiến trúc, áp dụng formal verification, đến việc nhìn lại các phương pháp QA truyền thống mà ngành đã dần bỏ quên.

[**AI fatigue is real and nobody talks about it**](https://substack.com/redirect/b8ccc8b1-9ec2-4aad-9a8e-f22adaf2701b?j=eyJ1IjoiMXhiYmVrIn0.lTWW3vD6qb7ZCESxguGoaB5rC86NuAUE_m6dEeWpjpk)

Có một nghịch lý mà không nhiều kỹ sư dám thừa nhận: họ ship nhiều code hơn bao giờ hết, nhưng lại cảm thấy kiệt sức hơn bao giờ hết. Tại sao lại như vậy?

Trong bài viết dưới đây, tác giả - một kỹ sư chuyên xây dựng AI agent infrastructure, core maintainer của OpenFGA (CNCF Incubating) và là người tạo ra nhiều công cụ phục vụ AI agents trong production - đã chia sẻ thẳng thắn về trải nghiệm burnout của chính mình. Không phải góc nhìn "AI thật tuyệt và đây là workflow của tôi", mà là phiên bản thật: ngồi trước màn hình lúc 11 giờ đêm, bao quanh bởi AI-generated code vẫn cần review, và tự hỏi tại sao công cụ được cho là tiết kiệm thời gian này lại nuốt chửng cả ngày làm việc.

Một số điểm đáng suy ngẫm mà tác giả phân tích:

- **Nghịch lý năng suất** - AI giúp mỗi task nhanh hơn, nhưng kết quả không phải là làm ít việc hơn, mà là làm nhiều việc hơn; kỳ vọng của manager và của chính bản thân đều tự động điều chỉnh theo.
- **Chi phí context-switching** - Thay vì dành cả ngày cho một vấn đề như trước, kỹ sư nay "chạm" vào sáu vấn đề khác nhau mỗi ngày; AI không mệt giữa các lần chuyển đổi, nhưng não người thì có.
- **Vai trò bị đổi ngầm** - AI giảm chi phí sản xuất code, nhưng chi phí coordination, review và ra quyết định lại tăng lên - và toàn bộ gánh nặng đó đổ lên vai người kỹ sư.

Tác giả nhấn mạnh: **nếu bạn đang dùng AI hàng ngày và thấy mình mệt mỏi hơn so với thời chưa có AI, bạn không hề tưởng tượng ra điều đó.**

Ba bài viết, ba lát cắt khác nhau nhưng đều dẫn về một thực tế trần trụi: AI không phải là "viên đạn bạc" giải quyết mọi vấn đề, nó là một chiếc kính lúp khổng lồ làm phóng đại cả năng lực lẫn những lỗ hổng trong tư duy kỹ thuật của chúng ta.

Khi AI tạo ra những dòng code "có vẻ đúng" nhưng rỗng tuếch về hiệu suất, khi các tập đoàn công nghệ lớn phải siết chặt quy trình vì rủi ro từ máy tính, và khi chính những người tiên phong trong giới infrastructure cũng thấy kiệt sức - đó là lúc chúng ta cần định nghĩa lại khái niệm "năng suất". Nếu chúng ta dùng AI để tạo ra nhiều rác hơn với tốc độ nhanh hơn, thì đó không phải là tiến bộ, đó là sự tích lũy của một cơn khủng hoảng trong tương lai.

Sau cùng, AI có thể thay ta gõ phím, nhưng nó không thể thay ta chịu trách nhiệm cho chất lượng và sự bền vững của hệ thống. Tốc độ chỉ là một ảo ảnh nhất thời; chỉ có tư duy phản biện, sự thấu đáo trong kiến trúc và sự cân bằng trong sức khỏe tinh thần mới là những giá trị thực sự còn sót lại sau khi mỗi deadline đi qua.

Đối với người kỹ sư, AI đã trở thành một công cụ không thể thiếu, nhưng cũng sẽ trở thành con dao hai lưỡi nếu ta dùng nó không cẩn thận. Hãy cẩn trọng trong quá trình sử dụng nó, đặc biệt là quan tâm đến sức khoẻ tinh thần của chính mình để theo đuổi con đường này dài hạn các bạn nhé.

**From Grokking**
