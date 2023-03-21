# iframe-custom-widget

This is a template repository which can be used to create a Happeo custom widget that renders an Iframe


**Iframe a webpage inside Happeo as a Custom Widget**

1. Go to "Admin Settings" as shown in the screenshot below.

![](RackMultipart20230321-1-p47ygg_html_5dd21504b8de6c60.png)

1. In the admin settings \> select "Apps"

![](RackMultipart20230321-1-p47ygg_html_60bb9eb6257aefe.png)

1. Then select the "Custom Apps Tab"

![](RackMultipart20230321-1-p47ygg_html_9c1eb431e3f81411.png)

1. Click on "Add Custom Widget" button on the top right corner

![](RackMultipart20230321-1-p47ygg_html_42779cf0a92613e9.png)

1. Then select "Custom app" as shown in the screenshot below

![](RackMultipart20230321-1-p47ygg_html_d873362cffd41fab.png)

1. Write the App Name in the "Widget Name" input field(We will be showing an example where we will Iframe a youtube video)

![](RackMultipart20230321-1-p47ygg_html_324bada1cebe4c3a.png)

1. Go to this[repository](https://raw.githubusercontent.com/happeo/iframe-custom-widget/main/custom-widget.js) and copy the code to a text editor.
2. Copy the auto generated slug from the Happeo app as shown below.

![](RackMultipart20230321-1-p47ygg_html_7b415501c90e61f7.png)

1. Replace the slug in the code with the slug that you copied in the step above

![](RackMultipart20230321-1-p47ygg_html_b6d85b3e4f85f7c7.png)

1. Replace the Iframe src with the URL of the webpage that you want to Iframe as shown in the image below.

![](RackMultipart20230321-1-p47ygg_html_9efab93473c8e249.png)

1. The final code should look like the image below

![](RackMultipart20230321-1-p47ygg_html_4bcf0ea43051a43d.png)

1. Upload the file where you saved the code here

![](RackMultipart20230321-1-p47ygg_html_fef5585bfeb37e9d.png)

1. Then click the "Add Widget" button on the bottom right corner

![](RackMultipart20230321-1-p47ygg_html_94d40d32da38ba2c.png)

1. Now scroll up and set the app status to testing by clicking "Set to testing" (the app will only be visible to you when it's set to testing)

![](RackMultipart20230321-1-p47ygg_html_c07fd6afd1b4cdc0.png)

1. Once you have tested the app go to the same menu as shown in the step above and set publish the app by clicking on "Publish" (now the app will be available for all page editors to use)

**Adding your newly created Iframe app on a Page**

1. Go to any page in edit mode and click on the "Add Widget" button.

![](RackMultipart20230321-1-p47ygg_html_8ad8041877b3f13e.png)

1. Select your app from the drop down menu.

![](RackMultipart20230321-1-p47ygg_html_e1f86ee2272e812.png)

1. Voila you have your web page iframed.

![](RackMultipart20230321-1-p47ygg_html_a4117782e5695513.png)
