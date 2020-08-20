<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Pay My School Fees|Home</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Scada&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="{{URL::asset('css/app.css')}}">
        {{-- <script src="https://js.paystack.co/v1/inline.js"></script>  --}}
        <script src="{{URL::asset('js/app.js')  }}" defer></script>
        {{-- <style>
            .js-cookie-consent{
                position: fixed;
                bottom: 0;
                padding: 2rem;
                text-align: center;
                width: 100%;
                z-index: 4;
                background-color: #ffbcdb;
                border-color: #fffacc;
                border: solid 1px;
            }
        </style> --}}
    </head>
    <body>
        {{-- @include('cookieConsent::index') --}}
        <div id="root"></div>
    </body>
</html>
