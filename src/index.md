---
title: Word Roots
layout: base.njk
---

# Word Roots

A guide to English vocabulary through the building blocks of meaning. Each chapter takes two or three Latin or Greek roots that share the same prefixes, and shows you how they combine. Learn one root and unlock a dozen words. Learn one prefix and apply it everywhere.

---

## Contents

- [Introduction — What Are Morphemes?]({{ '/intro/' | url }})
{% for chapter in collections.chapters %}
- [Chapter {{ chapter.data.chapternumber }} — {{ chapter.data.title }}]({{ chapter.url | url }})
{% endfor %}
- [Morpheme Index]({{ '/appendix/' | url }})

---

*This book teaches roughly 200 words explicitly. It unlocks 400–500 more.*
