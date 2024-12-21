---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4
---

> Add Markdown syntax content to file `_tabs/about.md`{: .filepath } and it will show up on this page.
{: .prompt-tip }

<section class="main-content">
    {% assign post = site.posts.first %}
    {% assign content = post.content %}
    <article class="module color-3">
        {{ content }}
    </article>
</section>
