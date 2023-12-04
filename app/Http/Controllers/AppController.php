<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

use Exception;
class AppController extends Controller
{
    public function index(){
        return view('index');
    }

    public function dashboard(){
        return view('dashboard');
    }

    //api to https://huggingface.co/Salesforce/codet5p-770m-py?text=write+me+a+program+code+that+sort+array    
//     public function postToApi(Request $request)
// {
//     $client = new Client();

//     $response = retry(3, function () use ($client, $request) {
//         return $client->post('https://api-inference.huggingface.co/models/Salesforce/codet5p-770m-py', [
//             'headers' => [
//                 'Content-Type' => 'application/json',
//                 'Authorization' => 'Bearer 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',
//             ],
//             'json' => [
//                 'inputs' => $request->input('data'),
//                 'max_length' => 1500, 
//             ],
//         ]);
//     }, 100);

//     if ($response->getStatusCode() !== 200) {
//         throw new Exception('Request failed');
//     }
//     \Log::info('Model API Response: ' . $response->getBody());
    
//     return json_decode($response->getBody());
// }

    
    public function postToApi(Request $request)
    {
        $client = new Client();
    
        $response = retry(3, function () use ($client, $request) {
            return $client->post('https://api-inference.huggingface.co/models/Salesforce/codet5p-770m-py', [
                'headers' => [
                    'Content-Type' => 'application/json',
                    'Authorization' => 'Bearer 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',
                ],
                'json' => [
                    'inputs' => $request->input('data'),
                  'parameters' => [
                    'max_length' => 750 ,
                 ] ,

                    
                ],
            ]);
        }, 100);
   
        if ($response->getStatusCode() !== 200) {
            throw new Exception('Request failed');
        }
        \Log::info('Model API Response: ' . $response->getBody());
        
        return json_decode($response->getBody());
    }
    
}