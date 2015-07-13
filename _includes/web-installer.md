
{% if isUpgrade %}
## Web Upgrader

Fire up your web browser of choice and visit your site by going

> http://www.yoursite.com/**index.php?phpfox-upgrade=true**

The first step of the web install, will be to select what type of license to re-assign to this copy of PHPfox.

![](/assets/img/select-a-license.png)

## Enter your License ID & Key

The next step will require you to re-enter your PHPfox License ID & Key. This is to prevent anyone from upgrading your site while it is offline.

![](/assets/img/enter-license-id.png)

## Upgrade Process

After you have successfully entered your PHPfox License ID & Key the **Upgrader** will run all the required updates to your database until it is completed.

{% else %}
## Web Installer

Fire up your web browser of choice and visit your site.

The first step of the web install, will be to select what type of license to assign to this copy of PHPfox.

![](/assets/img/select-a-license.png)

If you have purchased a license and wish to connect to our store front select **Premium**.

## Enter your License ID & Key

The next step will require you to enter your PHPfox License ID & Key, which was sent to you via an email directly after your purchase.

![](/assets/img/enter-license-id.png)

## Database Configuration

PHPfox uses MySQL(i) and you can use a local or remote server. If you do not have or know your database credentials, just contact your host
 and they will point you in the right direction.

![](/assets/img/database-configuration.png)

Once you have entered all the correct details and run the web installer, it will get everything setup in no time.

## Administrators Account

You are almost done! Your final step will be to create an administrators account. You can change any of the details you add here later,
so don't sweat it. One thing you might want to take a moment to think about, is your password. Make it a good one, your Admin account comes
with great power.

![](/assets/img/admin-account.png)

Congratulations! You have successfully installed PHPfox.

{% endif %}