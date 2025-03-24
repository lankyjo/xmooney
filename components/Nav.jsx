const Nav = () => {
    const links = [
        {
          name: 'Twitter',
          linktTo: 'https://x.com/Xmooneysol'
        },
        {
          name: 'Telegram',
          linktTo: 'https://t.me/Xmooneysol'
        },
        {
          name: 'Contact us',
          linktTo: '/'
        },
      ]
  return (
    <nav className=" p-5 max-w-7xl relative w-full flex justify-end max-md:justify-center gap-3">
        {
            links.map((link)=>(
                <a className="confirm_selection font-tt text-xl max-sm:text-lg" key={link.name} href={link.linktTo}>{link.name}</a>
            ))
        }
    </nav>
  )
}

export default Nav