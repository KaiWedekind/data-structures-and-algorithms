<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/KaiWedekind.png',
    name: 'Kai Wedekind',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/KaiWedekind' },
      { icon: 'twitter', link: 'https://twitter.com/kai_wedekinds' }
    ]
  }
]
</script>

<VPTeamMembers size="small" :members="members" />