---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4
layout: page
title: About
permalink: /about/
#> Add Markdown syntax content to file `_tabs/about.md`{: .filepath } and it will show up on this page.
#{: .prompt-tip }
---

> <b>Trần Quốc Nam - VNPT IT</b>.
{: .prompt-tip }
 
> Linkedin: [www.linkedin.com/in/danangloving](www.linkedin.com/in/danangloving)
{: .prompt-tip }

> Facebook: [www.facebook.com/danangloving](www.facebook.com/danangloving)
{: .prompt-tip }
<section class="main-content">
    {% assign post = site.posts.first %}
    {% assign content = post.content %}
    <article class="module color-3">
        {{ content }}
    </article>
</section>
