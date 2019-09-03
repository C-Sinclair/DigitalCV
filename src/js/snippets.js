export default function returnCode(code) {
  switch (code) {
    case "php":
      return `<pre><code class="language-php"><?php
      
class BasketPricing
{
    private $_bsId;
    private $_cnId;
    private $_db;
    private $voucher;
    private $services = array();
    private $items = array();
    private $vatRate = 0.2;

    public function __construct($bsId, $cnId, $offset = "0", $limit = "0")
    {
        $this->_bsId = $bsId;
        $this->_cnId = $cnId;
        $this->_offset = $offset ?: "0";
        $this->_limit = $limit ?: "0";
        $this->_db = new DB;

        $this->getInfo();
        $this->getData();
    }

    private function getInfo()
    {
        $this->_db->query("SELECT name, active, bsVcId FROM baskets WHERE bsId = '" . $this->_bsId . "'");
        $this->_db->next_record();
        list(
            $name,
            $active,
            $vcId
        ) = $this->_db->Record;

        if ($vcId && $vcId != 0) {
            $this->voucherCode = $this->_db->getval("SELECT vcCode FROM vouchers WHERE vcId = '$vcId'", "vcCode");
            $this->voucher = new BasketVoucher($vcId);
        }
    }
}</pre>`;

    case "js":
      return `<pre><code class="language-js">const navigate = (url, data, complete) => {
    window.history.pushState({ href: url }, '', url);
    if(!data) data = {};
    url += " #content > * ";
    load(url, data, complete);
}

const exit = fallback => {
    current = store.history.pop();
    previous = store.history.pop();
    prevData = store.data.pop();

    if(fallback) store.fallback = fallback;

    load(previous, prevData);
}</code></pre>`;

    case "jquery":
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
    case "mysql":
      return `<pre>CREATE TABLE Users (
    usId int IDENTITY(1,1) PRIMARY KEY,
    usLastName varchar(255) NOT NULL,
    usFirstName varchar(255),
    usAge int
);

INSERT INTO Users 
    (usLastName, usFirstName, usAge)
VALUES
    ("Sinclair", "Conor", 24);
    
SELECT 
    clSurname, 
    clFirstInitial, 
    ROUND(
        DATEDIFF(NOW(), clBirthDate), 
        365.25
    ) as 'clAge' 
FROM 
    clients 
WHERE 
    clId = '1'</pre>`;

    case "json":
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

    case "swift":
      return `<pre>class ClaimLogController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        setupLogo()
    }
}

extension UIViewController {
    func setupLogo() {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.image = UIImage(named: 'logo')
        self.navigationItem.titleView = imageView
    }
}</pre>`;

    case "kotlin":
      return `<pre>override fun onCreate(savedInstanceState: Bundle?) { 
    setTheme(R.style.AppTheme)
    super.onCreate(savedInstanceState)
    setContentView(layoutRes())
    startNav(graphStart())
    val app = application as App
    component = DaggerActivityComponent.builder()
        .activityModule(ActivityModule(this, navController))
        .appComponent(app.component)
        .build()
    onInject()
}</re>`;

    case "css":
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
    case "html":
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
