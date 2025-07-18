<script setup lang="ts">
import { BsSearch, AkChevronDown } from '@kalimahapps/vue-icons'
import { onMounted, h, createApp, ref } from 'vue'
import { useRouter } from 'vue-router'

const showSideDrawer = ref(false)
const router = useRouter()

const menuItems = ref([
  {
    name: 'Product',
    link: '/products',

    children: [
      { name: 'Antidetect phone', link: '/products/1' },
      { name: 'Antidetect browser for Android', link: '/products/2' },
      { name: 'Phone farm', link: '/products/3' },
      { name: 'Android antidetect', link: '/products/4' },
      { name: 'Android emulator', link: '/products/5' },
      { name: 'Android antidetect', link: '/products/6' },
    ],
  },
  {
    name: 'Solutions',
    link: '#',
    children: [
      {
        isColumnData: true,
        title: 'PLATFORMS',
        links: [
          { name: 'TikTok', link: '/solutions/tiktok' },
          { name: 'Telegram', link: '/solutions/telegram' },
          { name: 'YouTube', link: '/solutions/youtube' },
          { name: 'Facebook', link: '/solutions/facebook' },
          { name: 'Gmail', link: '/solutions/gmail' },
          { name: 'Instagram', link: '/solutions/instagram' },
          { name: 'Tinder', link: '/solutions/tinder' },
          { name: 'AliExpress', link: '/solutions/aliexpress' },
        ],
      },
      {
        isColumnData: true,
        title: 'USE SCENARIOS',
        links: [
          {
            name: 'Affiliate marketing',
            link: '/solutions/affiliate-marketing',
          },
          {
            name: 'Social media marketing',
            link: '/solutions/social-media-marketing',
          },
          {
            name: 'Ecommerce and dropshipping',
            link: '/solutions/ecommerce-dropshipping',
          },
          { name: 'Airdrop farming', link: '/solutions/airdrop-farming' },
          { name: 'Cloud gaming', link: '/solutions/cloud-gaming' },
          { name: 'Ad verification', link: '/solutions/ad-verification' },
        ],
      },
    ],
  },

  { name: 'Partners', link: '/partners' },
  { name: 'Pricing', link: '/pricing' },
  { name: 'Help Center', link: '/help-center' },
  { name: 'Download', link: '/download' },
])

const isColumnSubmenu = (
  children: (
    | { name: string; link: string }
    | {
        isColumnData: boolean
        title: string
        links: { name: string; link: string }[]
      }
  )[]
) => {
  return (
    children &&
    children.length > 0 &&
    'isColumnData' in children[0] &&
    children[0].isColumnData
  )
}

onMounted(() => {
  document.querySelectorAll('.header-menu > ul > li').forEach((li) => {
    const itemData = menuItems.value.find((item) => {
      const linkSpan = li.querySelector(':scope > a, :scope > span')
      return linkSpan && item.name === linkSpan.textContent?.trim()
    })

    if (itemData && itemData.children && itemData.children.length > 0) {
      const linkSpan = li.querySelector(':scope > a, :scope > span')

      if (linkSpan) {
        const iconVNode = h(AkChevronDown, {
          style: {
            width: '1rem',
            height: '1rem',
            display: 'inline-block',
            marginLeft: '0.25rem',
            color: '#6B7280',
          },
        })

        const container = document.createElement('span')
        const app = createApp({ render: () => iconVNode })
        app.mount(container)
        if (container.firstElementChild) {
          linkSpan.appendChild(container.firstElementChild)
        }
      }
    }
  })
})

onMounted(() => {
  const headermenu = document.querySelector('.header-menu') as HTMLElement
  if (headermenu) {
    const headerHeight = headermenu.offsetHeight

    document
      .querySelectorAll(
        '.header-menu > ul > li > ul.submenu, .header-menu > ul > li > div.submenu'
      )
      .forEach((submenu) => {
        ;(submenu as HTMLElement).style.top = `${headerHeight}px`
      })
  }
})

router.afterEach(() => {
  showSideDrawer.value = false
})
</script>

<template>
  <div class="header py-5 shadow-md fixed top-0 left-0 right-0 bg-white z-50">
    <div class="container mx-auto">
      <div class="header-menu relative flex justify-between items-center">
        <!-- Logo -->
        <div class="logo-header flex items-center flex-shrink-0">
          <NuxtLink to="/" class="">
            <img src="/img/logo.png" alt="UnionHub Logo" />
            <span> UnionHub </span>
          </NuxtLink>
        </div>
        <!-- Navbar Links -->
        <ul>
          <li v-for="(item, index) in menuItems" :key="index">
            <NuxtLink v-if="item.link && item.link !== '#'" :to="item.link">
              {{ item.name }}
            </NuxtLink>
            <span v-else>
              {{ item.name }}
            </span>

            <!-- Submenu Container -->
            <template v-if="item.children && item.children.length > 0">
              <div
                v-if="isColumnSubmenu(item.children)"
                class="submenu submenu--multicolumn"
              >
                <div
                  v-for="(column, colIndex) in item.children"
                  :key="colIndex"
                  class="submenu-column"
                >
                  <h4 v-if="'title' in column">{{ column.title }}</h4>
                  <ul v-if="'links' in column">
                    <li
                      v-for="(link, linkIndex) in column.links"
                      :key="linkIndex"
                    >
                      <NuxtLink :to="link.link">{{ link.name }}</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>

              <ul v-else>
                <li
                  v-for="(child, childIndex) in item.children"
                  :key="childIndex"
                >
                  <NuxtLink v-if="'link' in child" :to="child.link">
                    {{ child.name }}
                  </NuxtLink>
                </li>
              </ul>
            </template>
          </li>
        </ul>

        <div class="flex items-center space-x-4">
          <!-- Sign Up Button -->
          <button
            class="px-4 py-2 bg-[#00A275] text-white border border-[#00A275] rounded-md hover:bg-white hover:text-[#00A275] transition duration-300"
          >
            Sign up
          </button>
          <!-- Search Icon -->
          <button class="rounded-md">
            <BsSearch class="w-6 h-6 text-gray-600 hover:text-gray-900 ml-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Import font */

.logo-header > a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.logo-header > a > img {
  width: 2.5rem;
  height: 2.5rem;
}

.logo-header > a > span {
  font-size: 1.5rem;
  font-weight: 700;
  color: #404040;
}
@media (min-width: 640px) {
  .logo-text {
    display: inline;
  }
}

.header-menu > ul {
  display: none;
  list-style: none;
  padding: 0;
  margin: 0;
}

@media (min-width: 768px) {
  .header-menu > ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: #4b5563;
  }

  .header-menu > ul > li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .header-menu > ul > li > a,
  .header-menu > ul > li > span {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    padding: 0.6rem;
    color: #4a5568;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    white-space: nowrap;
    text-decoration: none;
    cursor: pointer;
  }

  .header-menu > ul > li > a:hover,
  .header-menu > ul > li > span:hover {
    color: #1a202c;
  }

  .header-menu > ul > li > span {
    cursor: default;
  }

  .header-menu > ul > li > ul,
  .header-menu > ul > li > div.submenu {
    position: absolute;
    width: 100%;
    left: 0;
    background-color: #fff;
    border-radius: 0.25rem;
    z-index: 50;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform: translateY(1rem);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out,
      visibility 0.3s ease-in-out;
    pointer-events: none;
    border: 1px solid #e5e7eb;
  }

  .header-menu > ul > li:hover > ul,
  .header-menu > ul > li:hover > div.submenu {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .header-menu > ul > li > ul {
    position: absolute;
    padding: 2rem;
    margin-top: 0;
    width: 100%;
    right: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .header-menu > ul > li > ul > li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .header-menu > ul > li > ul > li > a {
    padding: 0.5rem 1rem;
    display: block;
    text-decoration: none;
    color: #374151;
    font-size: 20px;
  }

  .header-menu > ul > li > ul > li:hover > a {
    color: var(--cl-secondary-300);
  }

  .header-menu > ul > li > div.submenu--multicolumn {
    padding: 2.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    width: 100%;
    left: 0;
  }

  .header-menu > ul > li > div.submenu--multicolumn > div {
  }

  .header-menu > ul > li > div.submenu--multicolumn > div > ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .header-menu
    > ul
    > li
    > div.submenu--multicolumn
    .submenu-column:first-child
    ul {
    grid-template-columns: 1fr 1fr;
    display: grid;
  }
  .header-menu > ul > li > div.submenu--multicolumn > div > h4 {
    font-size: 1.25rem;
    font-weight: bold;
    color: #6b7280;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
  }

  .header-menu > ul > li > div.submenu--multicolumn > div > ul > li > a {
    font-size: 1.25rem;
    color: #374151;
    padding: 0.25rem 0;
    display: block;
    margin-bottom: 0.25rem;
    text-decoration: none;
  }

  .header-menu > ul > li > div.submenu--multicolumn > div > ul > li > a:hover {
    color: var(--cl-secondary-300);
  }
}
</style>
