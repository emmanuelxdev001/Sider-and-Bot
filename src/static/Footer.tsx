const Footer = () => {
  return (
    <div className='flex justify-evenly items-baseline gap-10'>
      <div className="h-[40px] w-[120px]">Logo</div>
      <div className="flex justify-center items-baseline gap-10 cursor-pointer">
        <nav>Policy</nav>
        <nav>Terms snd Agrement</nav>
        <nav>Developers</nav>
        <nav>Planning Team</nav>
        <nav>Donor</nav>
        <nav>Contact Us</nav>
      </div>
    </div>
  )
}

export default Footer;