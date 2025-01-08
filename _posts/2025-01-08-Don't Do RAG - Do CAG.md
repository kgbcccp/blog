---
title: "Don't Do RAG - Do CAG !"
date: 2025-01-08
categories: [AI, RAG]
tags: [AI,RAG]
description: "Don't Do RAG - CAG is 40x faster than RAG, Retrieval-Free with higher precision"
---
Cache-Augmented Generation (CAG) emerges as a game-changing approach by eliminating real-time retrieval, leveraging preloaded knowledge, and achieving superior results. Here is how:<br/>
<br/>
<b>》 The Bottleneck of RAG</b><br/>
✸ Retrieval-Augmented Generation (RAG) has revolutionized AI systems by allowing models to fetch external knowledge dynamically. <br/>
✸ However, RAG introduces retrieval latency, document selection errors, and complex architectures, often leading to inefficiencies in time-sensitive tasks.<br/>
<br/>
<b>》 The CAG Paradigm: A Simpler, Faster Approach</b><br/>
✸ Key Idea: CAG leverages long-context Large Language Models (LLMs) with preloaded documents and precomputed memory (Key-Value Cache). <br/>
✸ This avoids reliance on external data fetches, enabling instant and contextually accurate answers without errors.
<br/>
✸ Why Is CAG Retrieval-Free?<br/>
&ensp;&ensp;☆ Preloaded Knowledge: Instead of dynamically retrieving documents, CAG preloads all required knowledge into the model’s context.<br/>
&ensp;&ensp;☆ Precomputed Memory (KV Cache): Documents are encoded into a Key-Value cache, which stores inference states and eliminates the need for lookups.<br/>
&ensp;&ensp;☆ Direct Access to Context: Queries directly access preloaded information, ensuring faster responses and bypassing retrieval mechanisms.<br/>
&ensp;&ensp;☆ Error-Free Responses: Since all context is preloaded, there’s no risk of retrieval errors or incomplete data.<br/>
✸ How Does CAG Preload Context?<br/>
&ensp;&ensp;☆ Document Preparation: All relevant documents are curated and preprocessed to fit within the LLM’s context window.<br/>
&ensp;&ensp;☆ Key-Value Cache Encoding: The documents are transformed into a precomputed KV cache that stores inference states.<br/>
&ensp;&ensp;☆ Storage and Reuse: This KV cache is stored in memory or disk and reused during inference, eliminating repeated processing.<br/>
&ensp;&ensp;☆ Query Execution: User queries leverage the preloaded cache, ensuring instant responses without additional retrieval steps.<br/>
<br/>
<b>》 Experimental Results: Why CAG Outperforms RAG</b><br/>
✸ Benchmark Datasets:<br/>
&ensp;&ensp;☆ HotPotQA - Focused on multi-hop reasoning.<br/>
&ensp;&ensp;☆ SQuAD - Emphasizes single-passage comprehension.<br/>
✸ Metrics:<br/>
&ensp;&ensp;☆ Accuracy: Measured with BERTScore.<br/>
&ensp;&ensp;☆ Speed: Response time comparisons.<br/>
✸ Findings:<br/>
&ensp;&ensp;☆ CAG outperformed RAG in accuracy and response time across small, medium, and large datasets.<br/>
&ensp;&ensp;☆ Large datasets saw up to 40x faster inference times compared to traditional RAG setups.<br/>
&ensp;&ensp;☆ CAG consistently maintained higher precision and coherence due to holistic context processing.<br/>
<br/>
<img src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/472819213_582044754584305_1675486409928280632_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFG96vk0FqgBNOPxjnf_Tx5j6L8vNPsLVaPovy80-wtVsrSoAZ60jmv6Dni58pkeo5OW3fueB1mz8sruY1FjwA-&_nc_ohc=mdm-1_aHiTgQ7kNvgHWAIb6&_nc_oc=Adg6NjxAYMxT9YVqxIW_xeAIC1htv3Mjk0toWxCXxCymJWrB3Upt_lh4fT6eups5YwdHnWw31ppOvBLDCFxJluaS&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=Ad09RVgCB-cVAFMJRH-gerV&oh=00_AYDAOb0TzuKZ-Bfvj0Ir6ARzWsVajwvQIYMPiXFrs-YpMA&oe=6783FDF4" />
<br/>
<b>Paper :</b> https://arxiv.org/pdf/2412.15605 
<br/>
<b>Github :</b> https://github.com/hhhuang/CAG
