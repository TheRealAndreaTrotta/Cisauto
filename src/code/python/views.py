from django.shortcuts import render

def my_view(request):
    context = {
        'address': "https://maps.app.goo.gl/jredbZaqToeCXEv89",
        'phone': "",
        'email': "mailto:info@example.com",
        'autoscout24': "https://www.autoscout24.it/concessionari/cisauto-group",
        'subito': "https://impresapiu.subito.it/shops/25148-cisauto-group",
        'moove': "https://moovesrl.com",
        'nppic': "https://www.nonprendermiperilchilometro.it",
        'google': "",
        'instagram': "https://www.instagram.com/cisautogroupbrescello?igsh=MW1wZjFrcXM3dXUwMA%3D%3D&utm_source=qr",
        'facebook': "https://www.facebook.com/CISAUTOBRESCELLOGROUP",
        'tiktok': "https://www.tiktok.com/@cisautogroupbrescello?_t=8n0MJk749i4&_r=1",
        'legal': "",
        'privacyPolicy': "",
        'cookiePolicy': "",
        'sendPrivacyRequest': "",
        'accessibility': "",
        'contacts': "",
        'corporateIta': "https://maps.app.goo.gl/jredbZaqToeCXEv89",
        'responsibleDisclosure': "",
        'rewardAnticounterfeiting': ""
    }
    
    return render(request, 'index.html', context)
