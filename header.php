<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
  </head>
  <body <?php body_class(); ?>>
    <div class="bg-[#DEF6ED]">
      <div class="lg:max-w-[1444px] mx-auto px-[25px] flex items-center h-[80px]">
        <!-- <h1 class="text-3xl py-10"><a href="<?php echo get_home_url(); ?>" class="hover:text-blue-500">Welcome To Our Header!</a></h1> -->
        <ul class="flex flex-row justify-between w-full">
          <li class="flex items-center gap-[14px]"><div><img src="<?php echo esc_url( get_theme_file_uri('assets/media/check.svg') ); ?>"
     alt="check image"
     class="w-9 h-9 rounded">
</div><span class="text-[19px] font-extrabold capitalize">UK based award-winning suppliers</span></li>
          <li class="flex items-center gap-[14px]"><div><img src="<?php echo esc_url( get_theme_file_uri('assets/media/check.svg') ); ?>"
     alt="check image"
     class="w-9 h-9 rounded">
</div><span class="text-[19px] font-extrabold capitalize">Compare all major UK networks</span></li>
          <li class="flex items-center gap-[14px]"><div><img src="<?php echo esc_url( get_theme_file_uri('assets/media/check.svg') ); ?>"
     alt="check image"
     class="w-9 h-9 rounded">
</div><span class="text-[19px] font-extrabold capitalize">No more hassle – we do the hard work for you</span></li>
        </ul>
      </div>
    </div>
  <header id="main-header" class="z-50 w-full sticky top-0 bg-transparent transition-all duration-300 h-[80px]">
  <!-- 
    FIXES:
    1. Moved 'h-[80px]' to the <header> tag so JS can control it.
    2. Changed 'transition-colors' to 'transition-all' so height animates too.
    3. Inner div is now 'h-full'.
  -->
  <div class="lg:max-w-[1444px] mx-auto px-[25px] flex items-center h-full">
    
    <!-- Logo -->
    <a href="<?php echo get_home_url(); ?>" class="w-[200px] lg:max-w-[288px] block">
      <img src="<?php echo esc_url( get_theme_file_uri('assets/media/business-hub-logo.svg') ); ?>" alt="business hub logo" class="w-full h-auto">
    </a>

    <!-- Desktop Navigation -->
    <nav class="ml-auto hidden lg:block">
      <ul class="flex flex-row items-center gap-[38px] text-[17px] font-extrabold text-white">
        <li><a href="<?php echo get_home_url(); ?>" class="hover:text-yellow-400 transition-colors">Home</a></li>
        <li><a href="#" class="hover:text-yellow-400 transition-colors">About us</a></li>
        <li><a href="#" class="hover:text-yellow-400 transition-colors">Services</a></li>
        <li><a href="#" class="hover:text-yellow-400 transition-colors">Resources</a></li>
        <li><a href="#" class="hover:text-yellow-400 transition-colors">Contact us</a></li>
        <li>
           <!-- Button -->
           <a href="#" class="bg-yellow-400 text-black text-base font-extrabold leading-none inline-flex flex-row justify-center items-center min-h-[53px] rounded-full px-[34px] transition-all ease-in-out duration-300 hover:bg-white hover:text-black">
             Start your quote
           </a>
        </li>
      </ul>
    </nav>

    <!-- Mobile Menu Trigger -->
    <button class="ml-auto lg:hidden text-white">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>

  </div>
</header>