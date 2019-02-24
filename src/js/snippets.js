function returnCode(code) {
  switch (code) {
    case 'php':
      return "&lt;?php<br><br>require dirname(__DIR__) . '/vendor/autoload.php';<br><br>error_reporting(E_ALL);<br>set_error_handler('CoreError::errorHandler');<br>set_exception_handler('CoreError::exceptionHandler');<br><br>$router = new CoreRouter();<br>$router->dispatch($_SERVER['REQUEST_URI']);<br>";

    case 'js':
      return `<pre>function navigate(url, data, complete) {
window.history.pushState({href: url}, '', url);
if(!data) data = {};
url += " #content > * ";
load(url, data, complete);
}

function exit(fallback) {
current = store.history.pop();
previous = store.history.pop();
prevData = store.data.pop();

if(fallback) store.fallback = fallback;

load(previous, prevData);
}<pre>`;

    case 'jquery':
      return `<pre>    $(".feedbackList").on('click', '.reply', function() {
    fbId = $(this).attr('fbId');
    $(".placeholder").load('/inc/conversation/float.php', {
        fbId : fbId
    }, function() {
        $('#messageList').load('/inc/conversation/messages.php', {
            fbId : fbId,
            scrollOffset : scrollOffset
        }, function() {
            setTimeout(function() {
                $("#messageList").animate({
                    scrollTop: $("#messageList")[0].scrollHeight
                }, 'slow');
            }, 250);
        })
    })
})
$('.placeholder').on("keypress", "#messageInput", function(e){
    if (e.which == 13 && !e.shiftKey) {
        scrollOffset = $("#messageList").scrollTop();
        fbId = $('#newFeedback').attr('fbId');
        fmMessage =  $('#messageInput').val();
        if(fmMessage) {
            $.post('/inc/queries/feedback.php', {
                type : "message",
                fbId : fbId,
                fmMessage : fmMessage
            }, function() {
                document.getElementById('messageInput').value = "";
            })
            $('#messageList').load('/inc/conversation/messages.php', {
                fbId : fbId,
                scrollOffset : $("#messageList")[0].scrollHeight
            });
        }
    }
});</pre>`;
    case 'mysql':
      return "CREATE TABLE Users (<br>&nbsp;&nbsp;&nbsp;&nbsp;usId int IDENTITY(1,1) PRIMARY KEY,<br>&nbsp;&nbsp;&nbsp;&nbsp;usLastName varchar(255) NOT NULL,<br>&nbsp;&nbsp;&nbsp;&nbsp;usFirstName varchar(255),<br>&nbsp;&nbsp;&nbsp;&nbsp;usAge int<br>);<br><br>INSERT INTO Users (usLastName, usFirstName, usAge)<br>SELECT clSurname, clFirstInitial, ROUND(DATEDIFF(NOW(), clBirthDate), 365.25) as 'clAge' <br>FROM clients <br>WHERE clId = '1'";

    case 'json':
      return `<pre>{"claims":[{
"id":"1",
"policyHolderName":"C S Lewis",
"siteAdLine1":"Unit 2 Salmon Springs",
"siteAdLine2":"",
"siteAdLine3":"",
"siteTown":"Stroud",
"siteCounty":"",
"sitePostcode":"GL6 6NU","contactTel":"0651",
"homeTel":"51065",
"workTel":"651361",
"mobileTel":"0320320",
"authorisedOther":"",
"vulnerable":false,
"highNetWorth":false,
"peril":"Boarding",
"perilDetail":"false",
"asbestosRisk":false,
"asbestosDetail":"",
"notes":"",
"client":"0","subClient":"0",
"clientRef":"12574",
"insuranceScheme":""},{"id":"2",
"policyHolderName":"Dr Doolittle"
}</pre>`;

    case 'swift':
      return "class ClaimLogController: UIViewController {<br>&nbsp;&nbsp;&nbsp;&nbsp;override func viewDidLoad() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; super.viewDidLoad()<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; setupLogo()<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}<br><br>extension UIViewController {<br>&nbsp;&nbsp;&nbsp;&nbsp; func setupLogo() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    let imageView = UIImageView()<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    imageView.contentMode = .scaleAspectFit<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    imageView.image = UIImage(named: 'logo')<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self.navigationItem.titleView = imageView<br>&nbsp;&nbsp;&nbsp;&nbsp; }<br>}";

    case 'kotlin':
      return 'override fun onCreate(savedInstanceState: Bundle?) { <br>&nbsp;&nbsp;&nbsp;&nbsp; setTheme(R.style.AppTheme)<br>&nbsp;&nbsp;&nbsp;&nbsp; super.onCreate(savedInstanceState)<br>&nbsp;&nbsp;&nbsp;&nbsp; setContentView(layoutRes())<br>&nbsp;&nbsp;&nbsp;&nbsp; startNav(graphStart())<br><br>&nbsp;&nbsp;&nbsp;&nbsp; val app = application as App<br>&nbsp;&nbsp;&nbsp;&nbsp; component = DaggerActivityComponent.builder()<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; .activityModule(ActivityModule(this, navController))<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; .appComponent(app.component)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; .build()<br>&nbsp;&nbsp;&nbsp;&nbsp; onInject()<br> } ';

    case 'css':
      return `<pre>@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700');
    
body {
font-family: 'Open Sans', sans-serif;
background-color: #DDDDDD;
display: -ms-grid;
display: grid;
-ms-grid-columns: 325px 1fr;
grid-template-columns: 325px 1fr;
-ms-grid-rows: 55px calc(100% - 55px);
grid-template-rows: 55px calc(100% - 55px);
    grid-template-areas: 
    "header header"
    "sidebar content";
justify-items: stretch;
-webkit-box-pack: stretch;
    -ms-flex-pack: stretch;
        justify-content: stretch;
margin: 0;
}</pre>`;
    case 'html':
      return `<pre>
&lt;table cellpadding='0' cellspacing='0'&gt;<br>
&lt;thead&gt;<br>
    &lt;tr&gt;<br>
        &lt;th colspan='3'&gt;<br>
            &lt;strong&gt;&lt;?=$title?&gt;&lt;/strong&gt;<br>
            &lt;div&gt;<br>
                &lt;a href='feedback.php'>&lt;i class='fas fa-times'>&lt;/i>&lt;/a&gt;<br>
            &lt;div&gt;<br>
        &lt;th&gt;<br>
    &lt;tr&gt;<br>
&lt;thead&gt;<br>
&lt;tbody&gt;<br>
    &lt;tr&gt;<br>
        &lt;td&gt;<br>
            &lt;div class='conversation container'&gt;<br>
                &lt;ul class='messages'&gt;&lt;/ul&gt;<br>
                &lt;button type='button' class='centred pointer' id='sendMessage' style='width: 110px'&gt;Send&lt;/button&gt;<br>
            &lt;div&gt;<br>
        &lt;div&gt;		<br>
    &lt;td&gt;<br>
&lt;tr&gt;<br>
&lt;tbody&gt;<br>
&lt;table&gt;</pre>`;
  }
}
