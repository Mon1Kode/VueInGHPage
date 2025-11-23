<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
    <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <!-- Setup View -->
      <div v-if="!isAuthenticated">
        <div class="text-center mb-8">
          <svg class="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
          </svg>
          <h1 class="text-3xl font-bold text-gray-800 mb-2">Spotify Playlist Creator</h1>
          <p class="text-gray-600">Create playlists with the Nth most popular song from each artist</p>
        </div>

        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Setup Instructions</h2>
          <ol class="list-decimal list-inside space-y-3 text-gray-700">
            <li>Go to <a href="https://developer.spotify.com/dashboard" target="_blank" class="text-blue-600 hover:underline">Spotify Developer Dashboard</a></li>
            <li>Log in with your Spotify account (free or premium)</li>
            <li>Click "Create app"</li>
            <li>Fill in:
              <ul class="list-disc list-inside ml-6 mt-2">
                <li>App name: "Playlist Creator" (or anything)</li>
                <li>App description: "Personal playlist tool"</li>
                <li>Redirect URI: <code class="bg-gray-100 px-2 py-1 rounded">{{ currentUrl }}</code></li>
                <li>Check "Web API"</li>
              </ul>
            </li>
            <li>Click "Save"</li>
            <li>Copy your "Client ID" from the app settings</li>
            <li>Paste it below and press Enter</li>
          </ol>
        </div>

        <div class="space-y-4">
          <input
            v-model="clientId"
            @keypress.enter="authorizeSpotify"
            type="text"
            placeholder="Paste your Spotify Client ID here and press Enter"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      <!-- Main App View -->
      <div v-else>
        <div class="text-center mb-8">
          <svg class="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
          </svg>
          <h1 class="text-3xl font-bold text-gray-800 mb-2">Spotify Playlist Creator</h1>
          <p class="text-gray-600">Connected ✓</p>
        </div>

        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Playlist Name</label>
            <input
              v-model="playlistName"
              type="text"
              placeholder="My Awesome Playlist"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Song Rank</label>
            <select
              v-model="rank"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="1">1st most popular</option>
              <option value="2">2nd most popular</option>
              <option value="3">3rd most popular</option>
              <option value="4">4th most popular</option>
              <option value="5">5th most popular</option>
              <option value="6">6th most popular</option>
              <option value="7">7th most popular</option>
              <option value="8">8th most popular</option>
              <option value="9">9th most popular</option>
              <option value="10">10th most popular</option>
              <option value="15">15th most popular</option>
              <option value="20">20th most popular</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Artists</label>
            <div class="space-y-2">
              <div v-for="(artist, index) in artists" :key="index" class="flex gap-2">
                <input
                  v-model="artists[index]"
                  type="text"
                  placeholder="Enter artist name"
                  class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  v-if="artists.length > 1"
                  @click="removeArtist(index)"
                  class="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </div>
            </div>
            <button
              @click="addArtist"
              class="mt-2 flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
              Add Artist
            </button>
          </div>

          <button
            @click="createPlaylist"
            :disabled="isCreating"
            class="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
            </svg>
            {{ isCreating ? 'Creating...' : 'Create Playlist' }}
          </button>

          <div v-if="statusMessage" class="mt-4 p-4 bg-gray-50 rounded-lg">
            <pre class="text-sm text-gray-700 whitespace-pre-wrap font-mono">{{ statusMessage }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import {process} from "std-env";

const isAuthenticated = ref(false)
const accessToken = ref('')
const clientId = ref('')
const playlistName = ref('')
const rank = ref('5')
const artists = ref([''])
const isCreating = ref(false)
const statusMessage = ref('')

const currentUrl = computed(() => {
  if (process.client) {
    return window.location.origin + window.location.pathname
  }
  return ''
})

onMounted(() => {
  checkForToken()
})

function checkForToken() {
  const hash = window.location.hash.substring(1)
  const params = new URLSearchParams(hash)
  const token = params.get('access_token')

  if (token) {
    accessToken.value = token
    isAuthenticated.value = true
    window.history.replaceState({}, document.title, window.location.pathname)
  }
}

function authorizeSpotify() {
  const id = clientId.value.trim()
  if (id) {
    const redirectUri = window.location.origin + window.location.pathname
    const scopes = 'playlist-modify-public playlist-modify-private'
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${id}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`
    window.location.href = authUrl
  }
}

function addArtist() {
  artists.value.push('')
}

function removeArtist(index: number) {
  artists.value.splice(index, 1)
}

async function createPlaylist() {
  const validArtists = artists.value.filter(a => a.trim() !== '')

  if (validArtists.length === 0) {
    alert('Please add at least one artist!')
    return
  }

  if (!playlistName.value.trim()) {
    alert('Please enter a playlist name!')
    return
  }

  isCreating.value = true
  statusMessage.value = 'Creating your playlist...'

  try {
    // Get user data
    const userResponse = await fetch('https://api.spotify.com/v1/me', {
      headers: { 'Authorization': `Bearer ${accessToken.value}` }
    })
    const userData = await userResponse.json()

    // Create playlist
    const playlistResponse = await fetch(`https://api.spotify.com/v1/users/${userData.id}/playlists`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken.value}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: playlistName.value,
        description: `Playlist with ${rank.value}th most popular songs`,
        public: false
      })
    })
    const playlistData = await playlistResponse.json()

    // Get tracks for each artist
    const rankIndex = parseInt(rank.value) - 1
    const trackPromises = validArtists.map(async (artist) => {
      try {
        // Search for artist
        const searchResponse = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(artist)}&type=artist&limit=1`, {
          headers: { 'Authorization': `Bearer ${accessToken.value}` }
        })
        const searchData = await searchResponse.json()

        if (searchData.artists.items.length === 0) {
          statusMessage.value += `\n⚠️ Artist not found: ${artist}`
          return null
        }

        const artistId = searchData.artists.items[0].id

        // Get top tracks
        const tracksResponse = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
          headers: { 'Authorization': `Bearer ${accessToken.value}` }
        })
        const tracksData = await tracksResponse.json()

        if (tracksData.tracks.length <= rankIndex) {
          statusMessage.value += `\n⚠️ Not enough songs for: ${artist}`
          return null
        }

        statusMessage.value += `\n✓ Added ${tracksData.tracks[rankIndex].name}`
        return tracksData.tracks[rankIndex].uri
      } catch (error) {
        statusMessage.value += `\n❌ Error with ${artist}`
        return null
      }
    })

    const trackUris = (await Promise.all(trackPromises)).filter(uri => uri !== null)

    // Add tracks to playlist
    if (trackUris.length > 0) {
      await fetch(`https://api.spotify.com/v1/playlists/${playlistData.id}/tracks`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken.value}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ uris: trackUris })
      })

      statusMessage.value += `\n\n🎉 Playlist created successfully with ${trackUris.length} songs!`
    } else {
      statusMessage.value += '\n\n❌ No tracks were added to the playlist'
    }
  } catch (error) {
    statusMessage.value = `Error: ${error.message}`
  } finally {
    isCreating.value = false
  }
}
</script>
