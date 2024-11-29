import { FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi'

interface ShareButtonsProps {
  title: string
  url: string
}

const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const fullUrl = `https://yourwebsite.com${url}`
  
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-xl font-semibold">Share this article</h3>
      <div className="flex gap-4">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#1DA1F2]/10 text-[#1DA1F2] rounded-full hover:bg-[#1DA1F2]/20 transition-colors"
        >
          <FiTwitter className="w-5 h-5" />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#0A66C2]/10 text-[#0A66C2] rounded-full hover:bg-[#0A66C2]/20 transition-colors"
        >
          <FiLinkedin className="w-5 h-5" />
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#1877F2]/10 text-[#1877F2] rounded-full hover:bg-[#1877F2]/20 transition-colors"
        >
          <FiFacebook className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}

export default ShareButtons
