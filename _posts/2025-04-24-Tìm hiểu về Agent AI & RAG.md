---
title: "Tìm hiểu về Agent AI & RAG"
date: 2025-04-24
categories: [RAG]
tags: [AI,Machine learning,RAG]
description: "RAG là gì? Tại sao cần RAG?"
---
#### [Phần 2] TÌM HIỂU AI AGENT

(Tiếp theo nội dung Phần 1, Giới thiệu Generative AI)

#### 3\. RAG là gì? Tại sao cần RAG?

Như đã đề cập ở trên, các mô hình GenAI / LLM miễn phí hoặc mua sẵn thường được pre-trained từ trước với những kiến thức cơ bản, thường là chưa đủ đáp ứng cho nhu cầu cụ thể về ngành hoặc của doanh nghiệp. Cách tiếp cận phổ biến là bổ sung / tăng cường tri thức đặc thù của doanh nghiệp cho mô hình AI, và đưa tri thức đến người dùng thông qua hình thức hỏi-đáp / tra cứu bằng chatbot là một trong những cách dễ tiếp cận nhất. Chatbot thì nhiều người biết rồi. Trong AI, kỹ thuật tăng cường gọi là RAG. Vậy RAG là gì?

> Retrieval Augmented Generation (RAG) is a method for generating text that combines a retrieval-based component with a generative component. The retrieval-based component retrieves relevant documents from an external knowledge base, such as Vector database, Wikipedia etc, and the generative component then uses these documents to generate text.

RAG = Retrieval Augmented Generation, trong đó:

-   Retrieval: khả năng truy xuất thông tin từ nguồn dữ liệu có sẵn (tài liệu / văn bản, cơ sở dữ liệu, wiki, hoặc người dùng nhập liệu), gọi chung các dữ liệu này là tri thức. Tri thức cần được tổ chức, sắp xếp, và phân nhóm theo phân loại thông tin, ví dụ: thông tin nội bộ doanh nghiệp, thông tin sản phẩm & dịch vụ cung cấp cho khách hàng, thông tin về quy chuẩn, điều khoản & điều kiện, thông tin theo công đoạn trên hành trình khách hàng từng bước chuyển hóa hành vi khách hàng hướng đến tăng hiệu quả kinh doanh, tăng năng suất lao động cho doanh nghiệp.

-   Augmented (tăng cường): khả năng bổ sung thông tin cho AI. Hiểu nôm na, AI được huấn luyện trước, cũng như người khi tư duy trả lời câu hỏi sử dụng tri thức có sẵn trong não bộ. Nhưng kiến thức trong não bộ có giới hạn, con người có thể tra cứu thông tin từ các thiết bị (mobile, từ điển,...) bên ngoài. Thì các thiết bị bên ngoài này giúp tăng cường tri thức cho con người.

-   Generation: khả năng tạo sinh sinh ra câu trả lời tổng hợp từ các tri thức truy xuất được trong ngữ cảnh của hội thoại, và theo các chỉ dẫn (prompting) do người dùng đưa vào hoặc cấu hình sẵn trong hệ thống.

[Hình 1, ví dụ minh họa về RAG]

[Hình 2, so sánh LLM đơn giản với LLM có thêm dữ liệu tăng cường]

Một hệ thống có khả năng RAG cần đáp ứng một số nhiệm vụ chính:

-   Loading: đưa tri thức vào hệ thống, có thể dưới nhiều dạng (text-based, table-structure, images, diagrams, hoặc layout phức tạp). Hiện nay đa số các công cụ làm tốt với plain-text hoặc text-based PDF, Word. Nếu có dữ liệu dạng bảng, thì cũng ở mức đơn giản (table không có merged rows / columns). Image và diagram phức tạp hơn nhiều (kết hợp sử dụng OCR) thường cho độ chính xác không cao khi bóc tách.

-   Chunking: Trong các bài toán về ứng dụng LLM, chunking là quá trình chia nhỏ nội dung một văn bản dài (vd một file tài liệu, một website) thành nhiều đoạn văn nhỏ hơn gọi là text chunks. Text chunks còn hiểu như một số dạng tóm tắt mà vẫn mang đầy đủ ý nghĩa & mục đích nội dung của tài liệu. Việc này nhằm phục vụ 2 mục đích:Cung cấp context để xây prompt cho câu hỏi của người dùng. Nói cách khác, để xác định câu hỏi của người dùng có thuộc "context" trong tri thức của doanh nghiệp không.\
    Vì text chunk là dạng tóm tắt của văn bản / tài liệu dài, giúp cung cấp câu trả lời ngắn gọn, súc tích, và đúng ý với câu hỏi. Qua đó giảm chi phí sử dụng tokens khi chạy LLM hơn. Ví dụ: nếu chạy GPT3.5, token limit là 4000 tokens, và dùng text chunks để xây examples cho prompt => yêu cầu toàn bộ câu hỏi & prompt <= 4000 tokens.

-   Indexing: chuyển các chunks sang dạng có thể so sánh / đối chiếu được, ví dụ nếu là text thì chuyển thành dạng vector (gọi là embedding), và lưu trữ vào các vector database.

-   Retrieving: khả năng tìm kiếm các chunks có liên quan nhất đến câu hỏi của người dùng trong ngữ cảnh hội thoại. Cũng có rất nhiều AI model xây dựng cho nhiệm vụ này, ví dụ top-K (K = 3, 5, 10,...). Kết quả trả về K số lượng chunks phù hợp nhất.

-   Generating: Từ kết quả trả về, tổng hợp thành câu trả lời cuối cùng. Có thể kếp hợp với bot persona (chân dung bo) về chuyên môn, ngôn ngữ, văn phong, tính chuyên nghiệp,... và prompting để có câu trả lời hài hòa & xúc tích.

Sử dụng phương thức RAG cũng tiềm ẩn nhiều rủi ro về tính chính xác, độ tin cậy thông tin, do RAG kết hợp sử dụng khá nhiều mô hình AI bên trong, ví dụ:

-   Lựa chọn chunk size (kích thước của text chunk) sao cho hợp lý? Làm thế nào giữ được ý chính của văn bản / tài liệu trong từng text chunk?

-   Khi chuyển đổi từ text sang vector, kích thước vector thế nào cho từng chunk size bé và lớn?

-   Khi tìm kiếm và trích xuất thông tin (retrieval), làm sao đảm bảo đúng các thông tin liên quan nhất đến nội dung câu hỏi?

Nên thực tế có rất nhiều kỹ thuật khác nhau đưa vào quá trình triển khai RAG để nâng cao tính chính xác (accuracy), trong khi vẫn cần lưu tâm tốc độ xử lý (latency) và chi phí vận hành (costs) cho các models liên quan, gọi chung là Advanced RAG.

[Hình 3, các kỹ thuật RAG nâng cao]

#### 4\. AI Agents

##### 4.1. Một số Khái niệm

Agent

Trước hết về mặt thuật ngữ, Agent (trợ lý) là ứng dụng phần mềm dựa trên AI, có khả năng sử dụng thông tin bên ngoài (environment) để thực hiện một nhiệm vụ nào đó qua việc xử lý ngôn ngữ tự nhiên.

Các bạn cũng biết nhiều về bot rồi, ví dụ:

-   Chatbot: nói chuyện với máy bằng cách chatchit

-   Voicebot: nói chuyện với máy qua thiết bị âm thanh (mic, loa)

-   Callbot: (hoặc AI Callcenter) nói chuyện với Tổng đài tự động

Một cách đơn giản để phân biệt agent với bot:

-   Bot: (*what the user interacts with*) là cái mà người dùng tương tác với, chúng ta hay gọi là "front-end" của giải pháp / phần mềm. Nên có khái niệm "bot persona" - chân dung em bot xinh tươi mình đang trò chuyện có tên gọi, tính cách, chuyên môn gì,...

-   Agent: (*where all the work occurs*) là trợ lý hỗ trợ đằng sau, thường là "back-end" thực hiện các tác vụ.

Workflow

Khái niệm quan trọng thứ hai là Worflow (luồng). Là cơ chế / khả năng điều phối & sắp xếp (orchestrate) các thành phần tham gia theo một đường hướng cho trước. Ví dụ: kiểm tra cái gì trước cái gì sau, theo cách thức tuần tự hay song song.

ReAct Framework (dựa trên CoT Prompting)

Mặc dù LLM được sử dụng rộng khắp và có nhiều ưu việt vượt trội, nhưng cũng bộc lộ những hạn chế vô cùng tai hại, bao gồm 2 nhược điểm lớn:

-   Hallucination (ảo giác): tự bịa ra kết quả không có trong nguồn tài liệu được cung cấp

-   Logical errors during reasoning (đưa ra kết quả tưởng chừng hợp lý): dựa vào thông tin retrieval từ các chunks, kết hợp các thông tin được pre-trained trước đó, LLM suy luận ra thông tin sai nhưng trông như thật và không hoàn toàn đúng với nguồn thông tin cung cấp

Ðiều này là do LLM học theo thống kê dựa vào việc đào tạo số lượng dữ liệu rất lớn, từ đó model sinh ra nội dung như người thật sử dụng các kỹ thuật prompting. Việc dự đoán của LLM bằng cách nhận diện tính tương đồng với dữ liệu đào tạo, chứ không phải hiểu biết và suy luận thực sự. Từ đó LLM tự tin sinh ra kết quả trông rất logic nhưng là kết quả sai với thông tin trong tài liệu cung cấp. Đã có nhiều phương pháp cố gắng cải thiện quá trình suy luận bằng cách đưa vào:

-   Các ví dụ minh họa: dùng fewshot prompting

-   Tư duy từng bước: dùng chain-of-thought prompting (CoT). CoT cho phép LLM sinh ra suy luận từng bước để dẫn ra câu trả lời.

CoT có một số hạn chế:

-   Internal isolation: giống kiểu một người bị nhốt trong phòng, không cửa ra vào, không cửa sổ, dựa vào tư duy cá nhân và nguồn lực trong phòng để tìm giải pháp

-   lack of reactivity: thiếu tính thích nghi / linh hoạt khi tình huống thay đổi

-   limited knowledge expansion: CoT dựa vào tri thức sẵn có, không có khả năng mở mang kiến thức, bổ sung thêm các thông tin cập nhật.

Nếu không có cách nào xác minh được facts, hallucination vẫn tìm cách làm "bẩn", làm sai lệch quá trình suy luận. ReAct kế thừa từ CoT bằng cách tạo cho LLM được quan sát (observation), tư duy & lập luận (thought), và đưa ra quyết định (take action).

[Hình 4, ReAct framework]

##### 4.2. Cách hoạt động của Agent

ReAct là cơ sở để trang bị bộ năng lực tư duy & lập luận cho các mô hình LLM, hoặc nói cách khác là năng lực agent cho LLM, kết hợp với khả năng điều phối / điều hướng đến đúng tool cần xử lý cho từng tác vụ cụ thể. Một số tên gọi có ý nghĩa tương đương: LLM Agent, Augmented LLM, Agentic LLM.

Cách tiếp cận này theo cấu trúc sau:

-   (Thông qua hội thoại với người dùng) Agent tiếp nhận yêu cầu

-   Thought: Agent "tư duy" về việc cần làm

-   Action: Agent quyết định việc cần làm là gì (tức là sử dụng tool nào), và thông tin đầu vào cho tool nên là những gì

-   Observation: Kết quả đầu ra của tool

-   Lặp lại bước 2-4 cho đến khi Agent "nghĩ" rằng việc đã hoàn thành.

Nói cách khác, Agent là khả năng suy nghĩ và tương tác với "thế giới" bên ngoài (hiểu là các thông tin mà LLM chưa có, và sử dụng Tool để lấy thông tin bên ngoài). Với mỗi nhiệm vụ, Agent sẽ nghĩ cách thực hiện, đưa ra kế hoạch, tương tác với môi trường bên ngoài, nhận kết quả, và lặp lại các bước này cho đến khi Agent nghĩ rằng đã hoàn thành nhiệm vụ.

[Hình 5, minh họa cách hoạt động của ReAct]

Nhìn theo dạng sơ đồ khối (building blocks), cấu trúc LLM Agent dạng đơn giản như sau:

-   Agent sử dụng LLM làm trọng tâm

-   [Planning] Dựa trên câu hỏi của người dùng, lập kế hoạch tư duy để tìm ra tool nào phù hợp nhất thực hiện tác vụ

-   [Execution] Thực hiện tác vụ đó

-   [Execution] Tiếp tục sang tác vụ khác cho đến khi hoàn thành nhiệm vụ

-   [Response] Đưa ra câu trả lời đầy đủ nhất cho người dùng.

[Hình 6, sơ đồ khối LLM Agent cơ bản]

Tại sao cần lập kế hoạch (planning)? Vì có thể có >1 cách tìm kiếm để trả lời cho câu hỏi. Agent cần tìm ra cách nào nhanh và hiệu quả nhất. Cách gọi khác là routing (điều hướng).

Ví dụ với câu hỏi sau "Có bao nhiêu công ty chưa có doanh thu mà đã huy động được ít nhất 1 tỷ đô?", sẽ có vài giải pháp:

(1) Tìm tất cả công ty chưa có doanh thu, sau đó lọc theo số tiền huy động được

(2) Tìm tất cả công ty đã huy động được ít nhất 1tỷ đô, sau đó lọc theo doanh thu

Phương án (2) có vẻ hiệu quả hơn, vì số lượng công ty chưa có doanh thu rất rất lớn, so với lượng công ty gọi vốn được 1 tỷ đô. Nên dùng điều kiện 1 tỷ đô để loại trừ số đông trước, sau đó thực hiện lọc sẽ mang lại tốc độ xử lý nhanh hơn nhiều. Agent cần đủ thông minh để lựa chọn phương án (2).

Cũng nên tách bạch nhiệm vụ planning (agent planner) khỏi việc execution của agent (tức là gọi đến một tool cụ thể, còn gọi là agent executor) để tránh trường hợp chạy một tool miệt mài không ra được kết quả. Từ đó giúp tối ưu prompting và thuật toán cho planner giúp chọn đúng tool.

[Hình 7, chi tiết các chức năng của Agent]

Planner cần lựa chọn & điều hướng đến đúng tool, một số kỹ thuật giúp cho planner có thể kể đến:

-   Sử dụng intent (ý định) và các entity liên quan: xác định được intent đằng sau câu hỏi của người dùng. Kết hợp khả năng viết lại câu hỏi (rewrite) bao gồm ngữ cảnh & một số câu hỏi trước đó để có intent đầy đủ nhất.

-   Với mỗi tool: cần chỉ rõ tên, mục đích của tool (tool purpose), kèm một số ví dụ, dữ liệu mẫu để minh họa cho mục đích đó

LLM giúp tìm kiếm tool (nếu có nhiều tools) và đối chiếu query intent & entity với từng tool purpose (vẫn là năng lực retrieval của LLM). Cũng vì nhiệm cụ của planner rất quan trọng, trong thực tế có những mô hình AI (hoặc LLM size nhỏ) sinh ra chỉ để làm planning cho agent (hoặc multi-agent).

> Chú thích về Tool Calling

> OpenAI từ đầu năm 2024 đã đưa lên tính năng Tool Calling khá tốt (tên gọi trước đây là Function Calling) cho các GPT model của họ. Tính năng này giúp đối chiếu các thông tin hiện có của Agent (từ hệ thống hoặc thu thập từ người dùng) với các tham số truyền vào cho Tool, từ đó gia tăng khả năng lựa chọn đúng tool hơn.

> Cơ chế này hiện tại cũng được trang bị cho nhiều LLM khác.

> Trong lập trình, khi thiếu các input parameter bắt buộc, function có thể ngưng hoạt động và báo lỗi. Cách thức tương tự cũng áp dụng cho Tool Calling, khi thực thi một tool, nếu thiếu tham số đầu vào, tool sẽ báo lỗi. Agent có thể dựa vào mã lỗi để đưa ra thông báo phù hợp và yêu cầu người dùng cung cấp thêm.

Nói cách khác, một số lỗi thường gặp khi xây dựng Planner:

-   Lựa chọn / điều hướng sai tool: có plan sinh ra, nhưng không khớp với tool purpose nào, hoặc không tìm được tool nào trong bộ tools của agent

-   Tìm được tool nhưng thiếu tham số truyền vào: ví dụ tool cần 3 tham số, nhưng planner truyền vào 2, bị thiếu tham số bắt buộc

-   Tìm được tool nhưng sai giá trị tham số: có thể là sai định dạng (format), quy cách, sai thứ tự các tham số

Càng thêm tool thì agent càng có thêm năng lực, nhưng nhiều tools cũng khiến agent planner khó lựa chọn được tool chính xác. Chọn nhầm tool có thể dẫn đến kết quả sai hoàn toàn. Ví dụ: trong bài toán thuê phòng khách sạn cho chuyến nghỉ mát của gia đình (hotel booking), agent cần hỏi khách hàng thông tin về việc đặt phòng (bao gồm điểm đến, ngày đi, số lượng ngày lưu trú, số lượng người, số lượng phòng). Sau khi khách hàng đưa thông tin, agent planner bị nhầm sang combo booking (đặt phòng bao gồm vé máy bay), khiến cho agent lại hỏi khách hàng cả điểm đi.

Mở rộng mô hình cho LLM Agent, có thể có thêm:

-   RAG: đóng vai trò như một tool tra cứu cơ sở tri thức

-   Memory: giúp lưu trữ các thông tin thu thập được từ người dùng, hoặc thông tin trong hệ thống, có long-term và short-term memory.

[Hình 8, Agent có thêm RAG và Memory]

Như vậy, giải quyết được bài toán AI Agent nghĩa là cần giải quyết một loạt các thách thức do sự thiếu chính xác của AI mang lại. Cũng vì thế mà công nghệ sẽ còn thay đổi và nâng cấp nhiều, với mong muốn đem lại những giải pháp chính xác và toàn diện hơn.

[Hình 9, Agent với các thách thức cần giải quyết]

Nhìn rộng ra cho tổng thể một giải pháp AI Agent, các bạn có thể tham khảo sơ đồ ngữ cảnh dưới đây.

[Hình 10, tổng thể giải pháp Agent cho doanh nghiệp]

##### 4.3. Tiêu chí đánh giá AI Agent

Một số bạn khi tiếp cận bài toán AI Agent có khuynh hướng xác định các tiêu chí đánh giá trước tiên (hoặc trong triển khai dự án, gọi là Tiêu chí nghiệm thu) để trả lời các câu hỏi kiểu như:

-   Thế nào là một dự án thành công? ⇒ Tiêu chí nghiệm thu (success criteria)

-   Thế nào là một AI model (tương tự với AI Agent) đáp ứng yêu cầu? ⇒ Tiêu chí đánh giá (evaluation criteria)

Tương tự trong phát triển phần mềm, cũng có phương pháp tương tự gọi là *test-driven development*, tức là làm test (thực hiện unit-testing) trước khi làm code.

Hoặc trong chuyển đổi số, hướng tiếp cận có thể đi từ các chỉ số cần đo đạc & đánh giá, rồi mới đến xây dựng tính năng. Chuyển đổi số mà, đánh giá dựa trên dữ liệu bao giờ cũng khách quan hơn dựa trên ý kiến chủ quan / kinh nghiệm.

##### Tiêu chí chung cho GenAI Model (Tiêu chí Kỹ thuật)

#1. Factuality (sự thật / tính thực tế)

Là khả năng phân biệt được phải quấy, tức là model có thể truy cập được các nguồn dữ liệu tin cậy và có tính xác minh cao, từ đó sinh ra kết quả gắn liền với thực tế rõ ràng. Đây là kỹ năng mang tính quyết định phải có của một Generative AI model, bởi nó mang lại sự chính xác và độ tin cậy của kết quả mà model sinh ra.

Một chút so sánh: mặc dù có thể điều chỉnh tham số temperature, nhưng ChatGPT vẫn nổi tiếng là tự bịa ra nhiều thứ nhìn qua thì có vẻ đúng (về ngữ pháp, lập luận) nhưng thực tế sai bét.

Để có khả năng factuality, thì model cần được trang bị:

Về knowledge acquisition:

-   Một lượng lớn dữ liệu "sạch": là dữ liệu thật, từ nhiều nguồn, ví dụ thông qua real-world sensors, thậm chí không bị chi phối (bias) bởi con người.

-   Thông tin ở nhiều định dạng khác nhau (tables, graphs, images), không chỉ ở dạng text.

-   Thông tin thể hiện một cách nhất quán: các tên gọi, dữ liệu, ở các dạng khác nhau đều được thống nhất cách hiểu, cách suy luận, và cách lấy thông tin.

Về fact checking & verification:

-   Các thông tin mang tính quan điểm, nhận định đều được làm rõ và xác minh, hoặc tham chiếu chéo từ nhiều nguồn khác nhau.

-   Đánh giá độ tin cậy các nguồn thông tin này.

Về generating outputs:

-   Dựa vào các thông tin mang tính factual cao, với mỗi câu hỏi đầu vào, sinh ra được câu trả lời cũng rất factual

-   Khả năng tóm tắt thông tin facts thành câu trả lời ngắn gọn & súc tích hơn

#2. Reasoning (khả năng lập luận / suy luận)

Khả năng này liên quan đến kiến thức và hiểu biết về thế giới quan nhằm giải quyết vấn đề, đưa ra kết luận, hoặc dự đoán. Không chỉ là việc ghi nhớ và đưa ra thông tin, nó đòi hỏi model:

-   Hiểu tình huống: nhận biết được thông tin liên quan, mối quan hệ giữa các thành phần, và ngữ cảnh chung của hội thoại.

-   Vận dụng tư duy logic và lập luận: biết sử dụng các quy tắc logic để lập luận tìm ra kết luận dựa trên những thông tin đang có

-   Xem xét các khả năng: có thể hình thành công thức và đánh giá được các giả định hoặc giải pháp cho một vấn đề.

-   Ra quyết định: chọn ra được đáp án hoặc chuỗi hành động khả dĩ nhất với những gì đang có và suy luận được.

#3. Summarization (tổng hợp)

Là khả năng tổng hợp thông tin một cách cô đọng và súc tích, cụ thể bao gồm:

-   Triết xuất được thông tin quan trọng từ văn bản để tập trung vào các ý chính

-   Khả năng khái quát hóa: tổng quát hóa được các mảnh ghép thông tin, bằng cách sử dụng từ ngữ mang tính khái quát hơn, tổng hòa hơn

-   Kết hợp nhiều tài liệu: có thể xử lý trên nhiều tài liệu, hoặc nhiều nguồn đầu vào

-   Cụ thể từng lĩnh vực (domain-specific): được huấn luyện theo từng lĩnh vực, từng ngành nghề đảm bảo sử dụng ngôn từ và ngữ cảnh theo lĩnh vực / ngành nghề đó.

Tiêu chí của một bản tổng hợp chuẩn chỉnh:

-   Chính xác (accuracy): thông tin tổng hợp phải đảm bảo giữ nguyên nội dung / ý chính của văn bản gốc

-   Xúc tích (conciseness): phải xúc tích & rõ ràng, đại diện cho văn bản gốc

-   Có liên quan (relevance): thông tin tổng hợp có liên quan đến ngữ cảnh và câu hỏi

-   Mạch lạc & chặt chẽ (coherence): thông tin được diễn giải một cách mạch lạc và trôi chảy giữa các câu.

-   Khách quan (objectivity): không mang tính chủ quan, phán xét

-   Lưu loát (fluency): ngôn từ & câu chữ đúng văn phong, ngữ pháp, và dễ đọc

##### Evaluation-Driven Development (Tiêu chí Nghiệp vụ)

Trong khi nhiều cái nhân / doanh nghiệp vẫn đang rất "hype" với AI, họ vẫn cần đưa ra các quyết định quan trọng dựa trên ROI khi đầu tư làm giải pháp AI. Nghĩa là giải pháp cần chứng minh được tính thiết thực, ví dụ như có thêm AI thì cắt giảm được bao nhiêu chi phí, rút ngắn được quá trình nào, hay gia tăng thêm bao nhiêu % cơ hội khách hàng mới, bao nhiêu % khách hàng chốt đơn với doanh nghiệp. Với mảng phòng ngừa rủi ro, thì ngăn chặn được bao nhiêu rủi ro, tiết kiệm được bao nhiêu tiền đền bù thiệt hại. Hay đơn giản là hoàn thành bao nhiêu % các business scenario của dự án.

Evaluation vẫn là câu chuyện đau đầu cho các doanh nghiệp muốn đưa AI vào thực tế. Trong lúc chưa có các evaluation pipeline đầy đủ và tin cậy, chúng ta vẫn phải dựa vào đội ngũ QC/QA thiện chiến, vẫn là sức người, nên vẫn tiềm ẩn sai sót hoặc vẫn bị "bias" theo kinh nghiệm & năng lực của họ.

##### From : https://www.facebook.com/share/p/197xf8vLeN/
