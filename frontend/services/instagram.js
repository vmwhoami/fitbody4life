export const instagramService = {
    // Instagram Graph API base URL
    baseUrl: 'https://graph.instagram.com',
    
    // Fetch user's media with access token
    async getUserMedia(accessToken, limit = 9) {
      try {
        const response = await fetch(
          `${this.baseUrl}/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=${limit}&access_token=${accessToken}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram media');
        }
        
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error('Instagram API error:', error);
        return [];
      }
    }
  };