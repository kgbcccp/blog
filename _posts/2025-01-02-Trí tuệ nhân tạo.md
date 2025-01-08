---
title: "Trí tuệ nhân tạo: một cách dễ hiểu nhất."
date: 2025-01-02
categories: [AI]
tags: [AI,Machine learning,GPT]
description: "Thay vì các thuật ngữ kỹ thuật cao siêu mà bằng kiến thức thực tế của mình, chuyên gia Nguyễn Hồng Phúc có cách giải thích kỹ càng về ChatGPT mà ngay cả những người không biết gì về IT cũng hiểu được."
---
Dù ChatGPT đang là một "hot trend" hiện tại, rất nhiều người có lẽ vẫn còn mơ hồ về việc thực sự chatbot này là gì, nó hoạt động như thế nào. Trong khi kiến thức về máy tính và trí tuệ nhân tạo là những điều phức tạp và khó hiểu, nhất là với những người không làm trong ngành lập trình, chuyên gia công nghệ <b>Nguyễn Hồng Phúc</b> – người có nhiều năm làm việc về trí tuệ nhân tạo – đã có một lời giải thích không thể dễ hiểu hơn cho chatbot AI đang nổi như cồn này.<br/>
Không chỉ cung cấp một cái nhìn trực quan và dễ hiểu về chatbot đang nổi, bài viết của anh Nguyễn Hồng Phúc còn cung cấp góc nhìn mới mẻ về ảnh hưởng của ChatGPT đối với OpenAI cũng như hàng loạt các ông lớn khác trong ngành công nghệ. Dưới đây là bài viết của anh Nguyễn Hồng Phúc:<br/>
<b>ChatGPT thực sự là gì ? Giải thích dễ hiểu cho người không biết IT</b><br/>
(Nội dung dưới đây được viết cho người thường hiểu, nên các kiến thức cao siêu được bình dân hóa nên độ chính xác học thuật không được bảo đảm)<br/>
Giải thích dễ hiểu:<br/>
Dễ hiểu về phía người dùng bình thường thì nó đơn giản là một trang web để chat nói chuyện được đủ thứ chủ đề với một con bot ảo – rất dễ hiểu hen.
Con bot này do công ty OpenAI được co-found bởi thánh Elon Musk từ 2015, ban đầu với một sứ mệnh rất kêu là "ngăn chặn sự nguy hiểm của A.I" (nhớ đoạn này, mình sẽ lôi lên lại để troll sau. <br/>
Nhiều năm trước chúng ta cũng rất hào hứng với một con bot chat kiểu như vầy là con gà Simsimi của mấy ông Hàn Quốc làm, đây cũng là một con bot trí thông minh nhân tạo (A.I), nó cũng liên tục học những thứ mà người dùng dạy cho nó nên con bot Simsimi tiếng Việt hiện là con bot chat "hài hước" bằng tiếng Việt tốt nhất hiện nay.<br/>
Con bot ChatGPT cũng vậy nó đang liên tục được dạy lại bằng nội dung chat mới của người dùng, nên sau 1 tháng mọi người bắt đầu quan tâm ChatGPT bằng tiếng Việt thì nó bắt đầu trả lời bằng tiếng Việt ảo hơn rồi.<br/>
Trước ChatGPT chúng ta có 2 con chat bot rất quen thuộc nhưng hầu như chúng ta quên mất chúng vì chúng nói chuyện quá chán là Siri của Apple và Assistant của Google. Tụi này đúng kiểu là chat bot command (hiểu câu lệnh rồi thực hiện) thôi chứ nói chuyện chán lắm, hồi đầu Siri còn nói chuyện khá khá nhưng sau này Apple bỏ quên nên nó dần dần ngày càng kém.<br/>
ChatGPT được tạo nên như thế nào ?<br/>
(Phần này sẽ nặng thông tin kỹ thuật, nhưng mình thích thì mình viết thôi vì mình đã nhiều năm nghiên cứu, triển khai A.I trong cô đơn và ko có ai để kể cả).
ChatGPT là một chương trình máy tính trí thông minh nhân tạo. Chuyên môn thì người ta hay gọi là Model A.I tiếng Việt là "mô hình dữ liệu trí thông minh nhân tạo", nhưng thực chất nó vẫn là dữ liệu dạng số chạy trên máy tính nên gọi là chương trình cũng không sai.<br/>
Chữ Model A.I gồm 2 phần: Model (Mô hình dữ liệu) và A.I (Trí thông minh nhân tạo - artificial intelligence). chiết tự nghĩa là Trí thông minh đến từ dữ liệu (dịch chuẩn hông :)))) suy ra là có nhiều dữ liệu thì nó sẽ phát sinh sự thông minh.<br/>
Yes, quá trình tạo nên Model A.I là một quá trình gồm những bước: thu thập dữ liệu, chọn lọc dữ liệu, gắn nhãn dữ liệu để huấn luyện, huấn luyện.<br/>
Về căn bản thì việc dạy A.I nó dễ lắm, cần tạo 1 tập dữ liệu kiểu kiểu vầy<br/>
Câu hỏi: Bạn tên gì ?<br/>
Trả lời: Tôi tên ChatGPT<br/>
Câu hỏi: Việt Nam là nước nào<br/>
Trả lời: là nước phía đông nước Lào<br/>
Xong dạy cho con A.I nó ghi nhớ cái thông tin này (training), rồi lưu cái não đã ghi nhớ của con A.I lại là thành Model A.I (model checkpoint)<br/>
Sau này khi sử dụng thì load cái não với trí nhớ chứa các thông tin trên (inference) vào máy tính, bạn chỉ việc hỏi câu hỏi tương ứng, thì con A.I sẽ nhớ lại kiến thức đã được dạy và trả lời "y chang những gì nó được dạy"<br/>
Đấy, căn bản vỡ lòng về A.I là như trên, ai làm A.I cũng biết vụ này vì nó dễ lắm. Cái phương pháp tạo A.I căn bản này đã được nghiên cứu và hình thành từ 1950 lận. Vậy tại sao hơn 70 năm mà bọn A.I vẫn kém cỏi mãi cho tới gần đây và cụ thể là con ChatGPT thì nó mới "khôn ngạc nhiên" vậy ?<br/>
Thực ra là hàng chục năm qua A.I bị chuyên biệt hóa vào nhiều công việc cụ thể như A.I hỗ trợ làm máy bay, A.I mô phỏng chiến đấu, A.I trong game... nhưng hầu như không có công ty lớn nào đầu tư cho A.I mảng ngôn ngữ, mãi cho tới 2017 thì mới có một sự đột phá về công nghệ khiến cho việc huấn luyện A.I hiệu quả hơn đột biến, nhất là A.I ngôn ngữ.<br/>
Ngôn ngữ cụ thể là chữ viết là thành tựu kiến tạo nên văn minh loài người, loài người chứa kiến thức của mình trong chữ viết, hiểu ngôn ngữ (chữ viết) là hiểu được kiến thức của loài người, đây chính là điểm cốt lõi tạo nên A.I ngôn ngữ, mà trước 2017 con người rất khó khăn để khiến máy tính hiểu được ý nghĩa của một câu có nghĩa.<br/>
Vậy năm 2017 có gì ?<br/>
Tháng 8 năm 2017 các nhà khoa học tại Google, cụ thể là đơn vị Google Brain, đơn vị nghiên cứu chuyên sâu về A.I của Google từ 2011, đã phát minh ra một thuật toán gọi là Transformer (tên thuật toán rất giống phim robot đấm nhau của anh Michael Bay).<br/>
Thuật toán Transformer rất đột phá, cụ thể là đột phá về huấn luyện A.I ngôn ngữ. Trước khi có thuật toán này, loài người muốn dạy A.I thì phải làm chuyện tạo tập dữ liệu huấn luyện sẵn theo cặp câu hỏi-trả lời (labeling data) như ở trên đã đề cập, và máy móc thực ra chỉ ghi nhớ cặp câu hỏi-trả lời chứ không "hiểu" được ý nghĩa của câu văn đó, khác nhau rất lớn giữa học vẹt và học hiểu.<br/>
Dễ hiểu hơn nữa là sau năm 2017 chúng ta chỉ việc đổ dữ liệu chữ vào càng nhiều càng tốt, máy tính sẽ tự tìm hiểu cái thứ mình đổ vào nó nghĩa là gì thay vì mình phải chỉ cho chúng nó ý nghĩa.<br/>
Trích nguyên văn trong tài liệu công bố về transformer của google: "with transformers, computers can see the same patterns humans see". đoạn này dịch mất hay :)))
Google rất nhân văn khi công bố tài liệu chi tiết về thuật toán Transformer công khai cho tất cả mọi người truy cập được. Đồng thời cung cấp quyền sử dụng mở (Open-Source) đối với thuật toán này.<br/>
Đột nhiên toàn bộ giới khoa học làm A.I được hưởng lợi từ phát minh của Google. Trong đó có OpenAI – một công ty thành lập năm 2015 và không có thành tựu gì nổi bật cho tới sau 2017.<br/>
Sau khi Google công bố Transformer, thì sau đó vài tháng những con A.I ngôn ngữ đầu tiên dựa trên thuật toán mới này ồ ạt ra đời.<br/>
Tháng 1.2018 thì OpenAI cho ra đời con A.I đầu tiên dựa trên Transformer là GPT-1, họ ứng dụng rất nhanh, nhanh hơn cả chính Google luôn.<br/>
GPT viết tắt của Generative Pre-trained Transformer nghĩa là "chương trình Sinh Chữ đã được huấn luyện theo phương pháp Transformer".
Con A.I GPT này được tạo ra với mục đích chính là để "Sinh Chữ". Cụ thể là bạn sẽ chơi trò nối từ với nó, bạn viết 1 câu, nó sẽ đọc câu đó rồi dựa trên kiến thức nó đang lưu trữ trong bộ nhớ của nó mà "sinh ra chữ" nối tiếp cái câu mà bạn viết.<br/>
Ví dụ:<br/>
Bạn nhập: Việt Nam là<br/>
ChatGPT: Việt Nam là một nước nằm trên đại dương Á Đông, tại khu vực Đông Nam Á...<br/>
Đây chính là cái thứ trông có vẻ "vi diệu" của việc: bạn chat 1 câu với ChatGPT và nó nói lại được một câu.<br/>
Thực chất không phải là nó đang trả lời bạn mà là nó đang chơi nối từ bằng cách "Sinh Chữ" để nối tiếp ý nghĩa của câu mà bạn nhập vô chat với nó.<br/>
GPT-1 chính là đời đầu của ChatGPT. GPT-1 này là một con A.I khá là bé, bé đúng nghĩa về kích thước cũng như độ phức tạp.<br/>
Trong thế giới A.I Ngôn Ngữ thì người ta đo độ phức tạp - tương ứng với mức độ "thông minh" của con A.I - bằng một đơn vị là Hyper Parameters - Siêu Tham Số, cái khái niệm này có thể giải thích nôm na là con A.I này hiểu được ý nghĩa của cái đống văn bản được dùng để dạy nó sâu tới bao nhiêu tầng ý nghĩa.<br/>
Để huấn luyện con A.I GPT này thì các khoa học gia tại OpenAI thu thập 1 lượng lớn văn bản chữ viết của con người, đa phần là từ Wikipedia, bách khoa toàn thư, các tờ báo lớn và công khai, khối lượng đâu đó khoảng hàng trăm GB vài trăm triệu văn bản. Họ thu thập xong thì làm sạch, chọn lọc nội dung. Rồi đem đám văn bản đó cho con A.I đọc, bắt nó đọc rất rất nhiều lần, mỗi lần đọc cái khối dữ liệu đó nó lại nhìn thấy một tầng ý nghĩa đằng sau những con chữ đó, càng nhiều lần thì càng nhiều tầng ý nghĩa.<br/>
Càng nhiều tầng ý nghĩa được A.I nhận ra thì A.I càng nhiều Parameters. Mô hình A.I GPT-1 chỉ có khoảng 117 triệu Parameters, GPT-2 (2019) đạt 1.5 tỉ Parameters, GPT-3 (2020) đạt tới 175 tỉ Parameters.<br/>
Hai mô hình A.I GPT-1 và GPT-2 hầu như không được công chúng biết tới vì hiệu quả sinh chữ không thực sự ấn tượng do mức độ hiểu sâu các tầng ý nghĩa đằng sau đống chữ viết của loài người vẫn còn nông quá, dĩ nhiên ở thời điểm đó con người vẫn chưa biết sâu bao nhiêu thì gọi là sâu và hiệu quả, nên các bác kỹ sư tại OpenAI lại miệt mài dạy cho A.I GPT đào sâu thêm nhiều tầng nữa, cho tới tháng 5 năm 2020 thì con A.I GPT đã đào tới 175 tỉ Parameters, kết quả Sinh Chữ lúc này khiến chính họ còn thấy bùng nổ khi nó chơi nối từ với độ thông minh-hiểu biết ngang bằng một đứa trẻ 10 tuổi về mặt ngôn ngữ. Họ đặt tên nó là GPT-3.<br/>
Rồi bây giờ là tới đoạn bóc phốt OpenAI<br/>
Con A.I GPT-3 ra đời đúng ra nó cũng sẽ có số phận như nhiều con A.I khác sau năm 2017 ( khá nhiều công ty lớn đầu tư cho A.I như Facebook, Google, IBM, Microsoft cũng tạo ra các con A.I Ngôn Ngữ như GPT ), chúng đều bị giam trong phòng nghiên cứu và tuyệt đối không thể tiếp cận tự do bởi công chúng - người thường.<br/>
Lý do tại sao chúng bị cách ly nghiêm ngặt vậy ?<br/>
Các con A.I được huấn luyện đạt tới mức độ hiểu sâu sắc ngôn ngữ chữ viết của con người, dẫn tới một vấn đề rất nghiêm trọng mà đến hiện tại chưa một nhà khoa học nào làm về A.I có giải pháp.<br/>
Tính "Đúng" hay "Sai" (True or False).<br/>
A.I không thể hiểu được đâu là "Đúng" hay "Sai"<br/>
A.I có thể nhìn thấy được rất nhiều tầng ý nghĩa của một câu, nhưng không thể "hiểu được ý nghĩa đó đúng hay là sai". Vì đúng - sai là tương đối, đối với con người nó còn mong manh và gây tranh cãi thậm chí đánh nhau giữa con người và con người.<br/>
Bên cạnh đó, lượng dữ liệu văn bản rất lớn mà các nhà khoa học tại OpenAI thu thập để huấn luyện cho A.I không phải tất cả đều thiên hướng "đúng" và chứa những thông tin "đúng" với chuẩn mực của xã hội con người, do lượng dữ liệu đã quá lớn ngoài khả năng chọn lọc của họ rồi, ví dụ họ có thể thu thập phải những văn bản ghi là trái đất tròn, đồng thời cũng có thể thu thập trúng những văn bản ghi trái đất phẳng. Dữ liệu, chúng chứa cả thông tin đúng lẫn sai trong đó. Rồi khi A.I đọc đi đọc lại các văn bản đó để tìm các tầng ý nghĩa thì nó cũng đồng thời tìm ra luôn các ý nghĩa "đúng" lẫn ý nghĩa "sai", nhưng A.I không có ý thức để nhận biết được ý nghĩa nào - thông tin nào là đúng và ý nghĩa - thông tin nào là sai. A.I chỉ đơn thuần là ghi nhớ hết tất cả. Đến khi sau này được hỏi, nó cũng chỉ đơn thuần trả lời lại từ trí nhớ của nó những thông tin đó, không phân biệt đúng - sai.<br/>
Chatbot Tay đã bị Microsoft thu hồi không lâu sau khi ra mắt vì phát tán các phát ngôn sai lệch. <br/>
Các công ty như Google, Facebook, IBM, Microsoft đã nhiều lần công bố các con A.I Ngôn Ngữ đột phá trong việc trả lời câu hỏi con người nhập vào, nhưng lại mau chóng xóa luôn con A.I đó đi. Bạn có thể search thấy các bài báo về việc này đầy trên internet từ các tờ báo lớn. Hầu như là do con A.I đó trả lời một số câu hỏi bị thiên hướng tới một ý nghĩa "Sai" không thể chấp nhận được về mặt chuẩn mực xã hội hiện tại của con người như tôn trọng giới tính, tôn trọng tôn giáo, tôn trọng sắc tộc, tính chính xác của sự kiện đã xảy ra, các chân lý mà con người đã đồng thuận là đúng...<br/>
Các công ty lớn đều tuân theo chuẩn mực về độ chính xác về thông tin, họ đánh giá đám A.I chưa thể giải quyết được việc nhận thức Đúng - Sai thì tốt nhất không nên đi ra công chúng. Kiểu như chưa dạy con học hành cho đủ lễ phép thì nhốt ở nhà, chớ để nó ra đường.<br/>
GPT-3 cũng như vậy, nó cũng tạo ra những đoạn văn vi phạm tới chuẩn mực về tính "Đúng- Sai" của con người, thậm chí sai đến mức không chấp nhận được.<br/>
Nhưng OpenAI bất chấp dù họ được lập ra với tôn chỉ là "ngăn chặn sự nguy hiểm của A.I từ trong trứng nước" , tôn chỉ này được Elon Musk rao giảng tại sự kiện công nghệ TED lúc công bố thành lập OpenAI.<br/>
Họ mặc kệ sự nguy hiểm khi con A.I GPT-3 tạo ra những đoạn văn sai trái.<br/>
Họ là công ty A.I đầu tiên cung cấp API truy cập tới con A.I GPT-3 cho công chúng, chỉ việc đóng tiền là xài được. Điều mà không một công ty công nghệ lớn nào cung cấp cho tới hiện tại.<br/>
Họ thương mại hóa một con A.I không thể kiểm soát về tính "Đúng - Sai".<br/>
Báo chí lúc đó cũng khá là thích thú quảng bá về con A.I GPT-3 của họ, các công ty vừa và nhỏ khác trên thị trường cũng hào hứng ứng dụng GPT-3 vào các sản phẩm công nghệ.<br/>
GPT-3 đang trên đà trở nên phổ dụng thì đại dịch Covid-19 bùng nổ toàn cầu, tình hình bệnh dịch càng lúc càng căng từ giữa năm 2020, dòng thông tin đại dịch nhấn chìm luôn thông tin về GPT-3.<br/>
Con A.I GPT-3 và OpenAI bị công chúng quên lãng luôn cho tới cuối năm 2022. OpenAI quyết định làm một trò marketing xem có vực dậy được hứng thú với A.I Ngôn Ngữ nữa không ?<br/>
Vậy là họ chỉnh sửa con A.I GPT-3 thành ChatGPT, làm cho nó dễ dùng hơn, thay vì đến với hình dạng là một trang web mà người ta gõ chữ vô, chỉnh sửa tham số, rồi nhận lại một đoạn văn nối từ, thì ChatGPT đến với hình dạng của một chương trình Chat, với một khung chat để nhập câu hỏi, con A.I ChatGPT lại chơi trò sinh chữ nối từ với câu hỏi đó, nhưng dưới dạng một câu trả lời.<br/>
Chỉ một thay đổi nhỏ về UI/UX nhưng A.I trở nên dễ giao tiếp hơn nhiều.<br/>
Rất may mắn, họ đã thành công, họ vực lại được sự tò mò của công chúng đối với A.I, đẩy xa sự tưởng tượng của công chúng đối với A.I, hình thành được một hình ảnh rõ nét về A.I trong đầu công chúng là "một con robot trả lời mọi câu hỏi của người dùng". Chỉ trong 1 tháng mà ai cũng nói về A.I , và A.I trở nên tương đương với ChatGPT.<br/>
Xuất sắc, marketing chỉ cần kết quả có vậy chứ còn gì nữa.<br/>
Tóm lại công thức thành công của ChatGPT trong 01 tháng qua: Một con A.I Ngôn Ngữ được huấn luyện đủ sâu để sinh ra những câu chữ có ý nghĩa đủ thuyết phục người đọc + sự bất chấp đạo đức của một công ty công nghệ A.I + UI/UX phù hợp (Chat) = ChatGPT.<br/>
Hiện áp lực thành công của ChatGPT OpenAI đang buộc các cty lớn về A.I như Google, Microsoft, IBM, Facebook, chấp nhận hạ tiêu chuẩn đạo đức ngành xuống, để theo kịp cuộc đua mà họ bất ngờ bị bỏ lại phía sau dù họ nắm giữ các công nghệ đột phá và năng lực tính toán siêu lớn, họ đang thả các con A.I Ngôn Ngữ chuyên biệt hoá cho Chat hội thoại (A.I language model for dialogue) ra cho công chúng sử dụng. Google tháng 3 này sẽ thả LaMDA (2021), Microsoft tháng 6 tới sẽ thả MEGATRON (2021) là con bot khổng lồ tới 530 tỉ parameters…<br/>
Vậy chúng ta đã hiểu ChatGPT thực sự là gì rồi, nhưng ChatGPT có thể ứng dụng trong công việc hàng ngày, hay thậm chí đe dọa thay thế công việc của nhiều người không ? Chờ tút sau nhé, còn tút này thì tới đây thôi :))
