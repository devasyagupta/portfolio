// ============================================================
// GITHUB API — fetch repo metadata for TopMetaBar
// ============================================================

export interface GitHubMeta {
  repoName: string
  author: string
  commits: number | string
  lastPush: string
}

export async function fetchGitHubMeta(username: string, repo: string): Promise<GitHubMeta> {
  try {
    const [repoRes, commitsRes] = await Promise.all([
      fetch(`https://api.github.com/repos/${username}/${repo}`, {
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/repos/${username}/${repo}/commits?per_page=1`, {
        next: { revalidate: 3600 },
      }),
    ])

    if (!repoRes.ok) throw new Error('repo fetch failed')

    const repoData = await repoRes.json()
    const lastPush = new Date(repoData.pushed_at).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })

    // GitHub returns total commits in Link header
    let commits: number | string = '—'
    const linkHeader = commitsRes.headers.get('Link')
    if (linkHeader) {
      const match = linkHeader.match(/page=(\d+)>; rel="last"/)
      if (match) commits = parseInt(match[1])
    }

    return {
      repoName: repoData.name,
      author: username,
      commits,
      lastPush,
    }
  } catch {
    return {
      repoName: 'portfolio',
      author: username,
      commits: '—',
      lastPush: 'Mar 2026',
    }
  }
}
