<?php

function boilerplate_load_assets() {
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element', 'react-jsx-runtime'), '1.0', true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'boilerplate_load_assets');

function boilerplate_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'boilerplate_add_support');

// Newsletter form handler
add_action('admin_post_nopriv_bh_newsletter_signup', 'bh_newsletter_signup_handler');
add_action('admin_post_bh_newsletter_signup', 'bh_newsletter_signup_handler');

function bh_newsletter_signup_handler() {
    $referer = wp_get_referer() ? wp_get_referer() : home_url();

    // Nonce check
    if ( ! isset($_POST['newsletter_nonce']) || ! wp_verify_nonce($_POST['newsletter_nonce'], 'bh_newsletter_signup') ) {
        error_log('BH Newsletter: nonce invalid or missing.');
        wp_safe_redirect( add_query_arg('newsletter','error', $referer) );
        exit;
    }

    $name  = isset($_POST['name']) ? sanitize_text_field($_POST['name']) : '';
    $email = isset($_POST['email']) ? sanitize_email($_POST['email']) : '';
    $note  = isset($_POST['note']) ? sanitize_textarea_field($_POST['note']) : '';

    if ( empty($email) || ! is_email($email) ) {
        error_log('BH Newsletter: invalid email provided: ' . maybe_serialize($email));
        wp_safe_redirect( add_query_arg('newsletter','invalid_email', $referer) );
        exit;
    }

    // Destination
    $to = 'ostinevan@gmail.com'; // change if needed

    $subject = 'Newsletter signup: ' . ($name ?: $email);
    $message = '<h2>New newsletter signup</h2>';
    $message .= '<p><strong>Name:</strong> ' . esc_html($name) . '</p>';
    $message .= '<p><strong>Email:</strong> ' . esc_html($email) . '</p>';
    if ( $note ) {
        $message .= '<p><strong>Note:</strong><br>' . nl2br(esc_html($note)) . '</p>';
    }
    $message .= '<p style="font-size:12px;color:#666;"><small>IP: ' . esc_html($_SERVER['REMOTE_ADDR'] ?? '') . ' | Agent: ' . esc_html($_SERVER['HTTP_USER_AGENT'] ?? '') . '</small></p>';

    // From header — use site admin email or fallback to no-reply@your-domain
    $site_domain = preg_replace('/^www\./','', $_SERVER['SERVER_NAME']);
    $from_email = get_option('admin_email') ? sanitize_email(get_option('admin_email')) : 'no-reply@' . $site_domain;
    $headers = array(
        'Content-Type: text/html; charset=UTF-8',
        'From: ' . 'No Reply <' . $from_email . '>'
    );

    // Add Reply-To only if submitted email is valid
    if ( is_email($email) ) {
        $safe_name = $name ? sanitize_text_field($name) : '';
        $reply_to = $safe_name ? $safe_name . ' <' . $email . '>' : $email;
        $headers[] = 'Reply-To: ' . $reply_to;
    }

    // Attempt to send
    $sent = false;
    try {
        $sent = wp_mail($to, $subject, $message, $headers);
    } catch (Exception $e) {
        error_log('BH Newsletter: wp_mail threw exception: ' . $e->getMessage());
        $sent = false;
    }

    // Debug log
    error_log(sprintf(
        "BH Newsletter: sent=%s, to=%s, from=%s, email=%s, name=%s, remote=%s",
        $sent ? 'true' : 'false',
        $to,
        $from_email,
        $email,
        $name,
        $_SERVER['REMOTE_ADDR'] ?? ''
    ));

    $redirect = add_query_arg('newsletter', $sent ? 'success' : 'error', $referer);
    wp_safe_redirect($redirect);
    exit;
}
// temp admin test - add near your other code (remove after testing)
add_action('admin_post_bh_email_test', function(){
  if ( ! current_user_can('manage_options') ) wp_die('no');
  $ok = wp_mail(get_option('admin_email'), 'WP Mail Test', 'This is a test email from WP.');
  var_dump($ok); // shows true/false in browser
  exit;
});
// facions
function bh_add_favicons() {
    $theme_uri = get_template_directory_uri() . '/assets/icons/';
    ?>
    <link rel="icon" href="<?php echo esc_url( $theme_uri . 'favicon.ico' ); ?>" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo esc_url( $theme_uri . 'favicon-32x32.png' ); ?>">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo esc_url( $theme_uri . 'favicon-16x16.png' ); ?>">
    <link rel="apple-touch-icon" href="<?php echo esc_url( $theme_uri . 'apple-touch-icon.png' ); ?>">
    <link rel="manifest" href="<?php echo esc_url( $theme_uri . 'site.webmanifest' ); ?>">
    <?php
}
add_action('wp_head', 'bh_add_favicons');


// Splide.js integration
function bh_enqueue_splide_assets() {
    // Splide CSS/JS from CDN (or copy locally)
    wp_enqueue_style('splide-css', 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.3/dist/css/splide.min.css', array(), '4.1.3');
    wp_enqueue_script('splide-js', 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.3/dist/js/splide.min.js', array(), '4.1.3', true);

    // Add AutoScroll Extension
    wp_enqueue_script('splide-auto-scroll', 'https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js', array('splide-js'), '0.5.3', true);

    // Your init script (Added splide-auto-scroll as a dependency)
    wp_enqueue_script('bh-splide-init', get_template_directory_uri() . '/src/scripts/splide-init.js', array('splide-js', 'splide-auto-scroll'), filemtime(get_template_directory() . '/src/scripts/splide-init.js'), true);

    // NEW: Load your main theme script (theme.js)
    wp_enqueue_script('bh-theme-js', get_template_directory_uri() . '/src/scripts/theme.js', array(), filemtime(get_template_directory() . '/src/scripts/theme.js'), true);
}
add_action('wp_enqueue_scripts', 'bh_enqueue_splide_assets');