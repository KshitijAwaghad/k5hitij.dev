interface GitHubUserResponse {
  followers: number;
  following: number;
  public_repos: number;
}

export interface GitHubProfileStats {
  followers: string;
  following: string;
  publicRepos: string;
}

export async function getGitHubProfileStats(): Promise<GitHubProfileStats> {
  try {
    const response = await fetch("https://api.github.com/users/KshitijAwaghad", {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json"
      }
    });

    if (!response.ok) {
      return {
        followers: "--",
        following: "--",
        publicRepos: "--"
      };
    }

    const data = (await response.json()) as GitHubUserResponse;

    return {
      followers: String(data.followers),
      following: String(data.following),
      publicRepos: String(data.public_repos)
    };
  } catch {
    return {
      followers: "--",
      following: "--",
      publicRepos: "--"
    };
  }
}
