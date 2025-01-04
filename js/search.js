!function(t){t(document).ready(function(){window.index=lunr(function(){this.field("title",{boost:10}),this.field("body"),this.ref("href")}),window.index.pipeline.reset(),window.index.add({href:"/astral/documentation/components/button/buttons.html",title:"Buttons",body:"Buttons are a fundamental element in web design, providing users with interactive controls to perform actions. Astral.CSS Framework offers a wide range of customizable button components that enhance user experience and align with modern design trends. Whether you need primary action buttons, secondary buttons, or icon buttons, Astral has you covered."}),window.index.add({href:"/astral/documentation/components/toast-static/toast-static.html",title:"Toast Messages",body:"A toast message is a short, non-blocking notification that typically appears at the bottom or top of the screen for a few seconds and then disappears automatically. Unlike alert pop-ups, toast messages do not require user interaction to dismiss them. They are often used to provide feedback on actions such as form submissions, saving settings, or network issues."}),window.index.add({href:"/astral/documentation/components/sidenav/sidenav.html",title:"Side Nav",body:"A sidenav, or side navigation bar, is a vertical navigation menu typically positioned on the left or right side of a webpage. Sidenavs contain links to different sections or pages of a website, making it easy for users to browse and discover content. The sidenav remains fixed or collapsible as the user scrolls through the page, allowing for easy access to key pages or actions without navigating away from the current content."}),window.index.add({href:"/astral/documentation/components/breadcrumbs/breadcrumbs.html",title:"Breadcrumbs",body:"Breadcrumbs are a crucial navigational aid that helps users understand their location within a website. Astral.CSS Framework offers a versatile and customizable breadcrumb component that enhances user experience by providing clear, hierarchical navigation paths."}),window.index.add({href:"/astral/documentation/components/cards/cards.html",title:"Cards",body:"Astral card components are perfect for displaying content in a structured and visually appealing manner. Use cards to showcase images, text, and actions in a compact format."}),window.index.add({href:"/astral/documentation/get-started/download/download.html",title:"Download",body:"Download the latest version of astral.css into you pc."}),window.index.add({href:"/astral/documentation/form2/check and radio/checkboxes-and-radios.html",title:"Checkboxes",body:"Use checkboxes when looking for yes or no answers. The for attribute is necessary to bind our custom checkbox with the input. Add the input's id as the value of the for attribute of the label."}),window.index.add({href:"/astral/documentation/components/chips/chips.html",title:"Chips",body:"Chips are small, interactive elements that represent an input, attribute, or action. Astral chips are customizable and can be used for tags, categories, or filters"}),window.index.add({href:"/astral/documentation/utilities/colors/colors.html",title:"Color",body:"Here is a color  based on the astral.css base colors."}),window.index.add({href:"/astral/documentation/components/dropdown/dropdown.html",title:"dropdown",body:"Dropdown provide a way to display a list of options that users can select from. Astral dropdowns are easy to implement and customize.."}),window.index.add({href:"/astral/documentation/components/footer/footers.html",title:"footer",body:"Footers are essential for providing important information and navigation links at the bottom of your page. Astral footer components are flexible and easy to customize."}),window.index.add({href:"/astral/documentation/get-started/introduction/get-started.html",title:"Getting Started",body:"Learn how to easily start using Astral in your website."}),window.index.add({href:"/astral/documentation/layout/grid/grid.html",title:"Grid",body:"We are using a standard 12 column fluid responsive grid system. The grid helps you layout your page in an ordered, easy fashion."}),window.index.add({href:"/astral/documentation/layout/breakpoints/breakpoints.html",title:"Breakpoints",body:"Breakpoints are customizable widths that determine how your responsive layout behaves across devices in Astral."}),window.index.add({href:"/astral/documentation/layout/css grid/css-grid.html",title:"CSS Grids",body:"Utilities for specifying the columns in a grid layout"}),window.index.add({href:"/astral/documentation/components/divider/dividers.html",title:"Divider",body:"Dividers** are used to separate content into distinct sections. Astral.CSS's dividers are simple yet effective in organizing your layout"}),window.index.add({href:"/astral/documentation/components/modal/modals.html",title:"modals",body:"Modals are used to display content in a layer above the main page. Astral modals are perfect for forms, notifications, and additional information."}),window.index.add({href:"/astral/documentation/components/message/message.html",title:"Message",body:"Messages** are used to display important information to users. Astral.CSS's message components are designed to be clear and attention-grabbing."}),window.index.add({href:"/astral/documentation/components/navigation/navigation.html",title:"navbar",body:"The navbar is fully contained by an HTML5 Nav tag. Inside a recommended container div, there are 2 main parts of the navbar. A logo or brand link, and the navigations links. Navigation bars are crucial for guiding users through your website."}),window.index.add({href:"/astral/documentation/components/pagination/pagination.html",title:"pagination",body:"Pagination helps users navigate through large sets of content."}),window.index.add({href:"/astral/documentation/form2/check and radio/checkboxes-and-radios.html",title:"radio buttons",body:"Radio Buttons are used when the user must make only one selection out of a group of items."}),window.index.add({href:"/astral/documentation/form2/range/form-range.html",title:"range slider",body:"Add a range slider for values with a wide range."}),window.index.add({href:"/astral/documentation/form2/form layouts/form-layouts.html",title:"Form Layout",body:"Give your forms some structure—from inline to horizontal to custom grid implementations."}),window.index.add({href:"/astral/documentation/form2/input group/input-groups.html",title:"Input Group",body:"Easily extend form controls by adding text, buttons, or button groups  on either side of textual inputs, custom selects, and custom file inputs."}),window.index.add({href:"/astral/documentation/form2/form control/form-control.html",title:"Form Control",body:"The form input and its variations."}),window.index.add({href:"/astral/documentation/form2/overview/form-overview.html",title:"Form Overview",body:"		Forms are a crucial part of web development, enabling user interaction and data collection. Astral provides a comprehensive set of CSS components to create beautiful, responsive forms with ease. Whether you're building a simple contact form or a complex registration form, Astral has you covered."}),window.index.add({href:"/astral/documentation/form2/select/form-select.html",title:"Select",body:"Select allows user input through specified options."}),window.index.add({href:"/astral/documentation/utilities/shadow/shadow.html",title:"shadow",body:"In astral.css, everything should have a certain z-depth that determines how far raised or close to the page the element is."}),window.index.add({href:"/astral/documentation/form2/check and radio/checkboxes-and-radios.html",title:"Switches",body:"Switches are special checkboxes used for binary states such as on / off"}),window.index.add({href:"/astral/documentation/components/table/tables.html",title:"table",body:"Tables are a nice way to organize a lot of data. We provide a few utility classes to help you style your table as easily as possible."}),window.index.add({href:"/astral/documentation/components/animation/animations.html",title:"Animations",body:"Animations can significantly enhance the user experience by adding visual interest and guiding user interactions. We currently offer 4 set of animation that make it easy to create smooth, engaging animations for your web projects."}),window.index.add({href:"/astral/documentation/components/alert/alerts.html",title:"Alerts",body:"Alerts are essential for providing users with important information, warnings, or confirmations. Astral.CSS Framework offers a versatile and customizable alert system that enhances user experience by delivering clear and concise messages. Whether you need to notify users of errors, successes, or general information."}),window.index.add({href:"/astral/documentation/components/article/articles.html",title:"Article",body:"Astral article component great for blogs"}),window.index.add({href:"/astral/documentation/components/tabs/tabs.html",title:"tabs",body:"The tabs structure consists of an unordered list of tabs that have hashes corresponding to tab ids. Then when you click on each tab, only the container with the corresponding tab id will become visible."}),window.index.add({href:"/astral/documentation/components/notification/notifications.html",title:"Notification",body:"Notifications are used to inform users about important updates or actions. Astral.CSS's notification components are designed to be clear and effective."}),window.index.add({href:"/astral/documentation/form2/form control/form-control.html",title:"Text Input Fields",body:"Text fields allow user input. The border should light up simply and clearly indicating which field the user is currently editing."}),window.index.add({href:"/astral/documentation/javascript/toast/toastify.html",title:"Toasts",body:"Astral provides an easy way for you to send unobtrusive alerts to your users through toasts. These toasts are also placed and sized responsively, try it out by clicking the button below on different device sizes."}),window.index.add({href:"/astral/documentation/javascript/otp generator/otp-generator.html",title:"One Time Password Generator",body:"Astral provides an easy way for you  generate one time password for your website app."}),window.index.add({href:"/astral/documentation/components/tooltip/tooltips.html",title:"Tooltips",body:"Tooltips are small, interactive, textual hints for mainly graphical elements. When using icons for actions you can use a tooltip to give people clarification on its function."}),window.index.add({href:"/astral/documentation/dark mode/theme/dark-mode.html",title:"Dark mode",body:"Astral framework also supports dark mode. It's also really useful if you want your users to select their own theme."}),window.index.add({href:"/astral/documentation/utilities/typography/typography.html",title:"Typography",body:"font, headers, blockquotes, flow text."}),window.index.add({href:"/astral/documentation/components/tooltip/tooltips.html",title:"Tooltip",body:"Tooltips provide additional information when users hover over an element"}),window.index.add({href:"/astral/documentation/components/tags/tags.html",title:"Tags",body:"Tags are used to categorize content."}),window.index.add({href:"/astral/documentation/components/tabs/tabs.html",title:"Tabs",body:"Tabs are used to organize content into separate views. Astral.CSS's tab components are easy to implement and customize."}),window.index.add({href:"/astral/documentation/components/table/tables.html",title:"Tables",body:"Tables are used to display data in a structured format"}),window.index.add({href:"/astral/documentation/components/section/sections.html",title:"Tables",body:"Sections help organize your content into distinct parts"}),window.index.add({href:"/astral/documentation/components/progress bar/progressbars.html",title:"Progress Bars and Spinners",body:"Progress bars are used to visually represent the progress of a task. Astral.CSS's progress bars are customizable and easy to implement.If you have content that will take a long time to load, you should give the user feedback. For this reason we provide a number activity + progress indicators."}),window.index.add({href:"/astral/documentation/utilities/background/background.html",title:"Background",body:"Convey meaning through background color."}),window.index.add({href:"/astral/documentation/utilities/border/borders.html",title:"Border",body:"Use border utilities to quickly style the border and border-radius of an element. Great for buttons, or any other element."}),window.index.add({href:"/astral/documentation/utilities/colors/colors.html",title:"Colors",body:"The colors that style most Astral elements and components"}),window.index.add({href:"/astral/documentation/utilities/cursors/cursors-pointers.html",title:"Cursor Pointers",body:"Utilities for controlling the cursor  style when hovering  over an element."}),window.index.add({href:"/astral/documentation/utilities/display/display.html",title:"Display",body:"Quickly toggle the display value of components and more with our display utilities."}),window.index.add({href:"/astral/documentation/utilities/flex/flex.html",title:"Flex box",body:"Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities."}),window.index.add({href:"/astral/documentation/utilities/floats/float.html",title:"Float",body:"Toggle floats on any element"}),window.index.add({href:"/astral/documentation/utilities/interaction/interactions.html",title:"Interaction",body:"Utility classes that change how users interact with contents of a website."}),window.index.add({href:"/astral/documentation/utilities/opacity/opacity.html",title:"Opacity",body:"Control the opacity of elements."}),window.index.add({href:"/astral/documentation/utilities/overflow/overflow.html",title:"Overflow",body:"Use these shorthand utilities for quickly configuring how content overflows an element."}),window.index.add({href:"/astral/documentation/utilities/position/position.html",title:"Position",body:"  Use these shorthand utilities for quickly configuring the position of an element."}),window.index.add({href:"/astral/documentation/utilities/shadow/shadow.html",title:"Shadow",body:"Add or remove shadows to elements with box-shadow utilities."}),window.index.add({href:"/astral/documentation/utilities/sizes/sizes.html",title:"Sizes",body:"Easily make an element as wide or as tall with our width and height utilities."}),window.index.add({href:"/astral/documentation/utilities/spacing/spacing.html",title:"Spacing",body:"Utilities for controlling an element's padding and margin"}),window.index.add({href:"/astral/documentation/utilities/text/text.html",title:"Text",body:"Documentation and examples for common text utilities  to control alignment, wrapping, weight, and more."}),window.index.add({href:"/astral/documentation/utilities/typography/typography.html",title:"Typography",body:"Change the size, weight, and other font properties of text"}),window.index.add({href:"/astral/documentation/utilities/vertical alignment/vertical-align.html",title:"Vertical Align",body:"Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements."}),window.index.add({href:"/astral/documentation/utilities/visibility/visibility.html",title:"Visibility",body:"Control the visibility of elements, without modifying their display, with visibility utilities."}),t("ul.sidenav div.input-group i.fa.fa-search").click(function(){t(".search-results .focused").length?t(".search-results .focused").first()[0].click():t(".search-results").children().length&&t(".search-results").children().first()[0].click()});var e=function(e,o){var a=t(".search-results");a.empty(),Array.prototype.forEach.call(e,function(t,e){var i=document.createElement("a");i.href=`${o[e].ref}`,i.textContent=`${t[0]}`,i.className="text-is-capitalized",a.append(i)})},o=function(t){var e;return function(){var o=Array.prototype.slice.call(arguments),a=this;clearTimeout(e),e=setTimeout(function(){t.apply(a,o)},100)}};t("input#search").focus(function(){t(this).parent().addClass("focused")}),t("input#search").blur(function(){t(this).val()||t(this).parent().removeClass("focused")}),t("input#search").on("keyup",o(function(o){if(2>t(this).val()){e([]);return}if(38===o.which||40===o.which||13===o.keyCode)return;var a=t(this).val(),i=window.index.search(a).slice(0,6).map(function(t){var e=t.ref.split("/")[5];return[e.charAt(0).toUpperCase()+e.slice(1),e]});let n=window.index.search(a);e(i,n)})),t("input#search").on("keydown",o(function(o){var a;if(27===o.keyCode){t(this).val(""),t(this).blur(),e([]);return}if(13===o.keyCode){t(".search-results .focused").length?t(".search-results .focused").first()[0].click():t(".search-results").children().length&&t(".search-results").children().first()[0].click();return}switch(o.which){case 38:t(".search-results .focused").length&&((a=t(".search-results .focused")).removeClass("focused"),a.prev().addClass("focused"));break;case 40:t(".search-results .focused").length?(a=t(".search-results .focused")).next().length&&(a.removeClass("focused"),a.next().addClass("focused")):(a=t(".search-results").children().first()).addClass("focused");break;default:return}o.preventDefault()}))})}(jQuery);