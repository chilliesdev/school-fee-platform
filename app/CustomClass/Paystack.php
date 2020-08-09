<?php 

namespace App\CustomClass;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\BadResponseException;

class Paystack 
{
	private $secretKey;
	private $publicKey;

	public function __construct()
	{
		$this->secretKey = getenv('PAYSTACK_SECRET_KEY');
	}

	public function get($url)
	{
		return $this->requestClient('GET', $url);
	}
	
	public function post($url, $data)
	{
		return $this->requestClient('POST', $url, $data);
	}

	public function requestClient($type, $url, $data = null)
	{
		$client = new Client([
			'base_uri' => 'https://api.paystack.co'
		]);

		$headers = [
				'Authorization' => 'Bearer ' . $this->secretKey
		];

		try {
			switch ($type) {
				case 'POST':
					$response = $client->request('POST',$url,[ 
						'headers' => $headers,
						'form_params' => $data
					]);

					return json_decode($response->getBody(), true);
					break;
				
				default:
					$response = $client->request('GET',$url,[ 
							'headers' => $headers
						]);

					return json_decode($response->getBody(), true);
					break;
			}
		} catch(BadResponseException $e) {
			return [
				'status' => false,
				'status_code' => $e->getResponse()->getStatusCode(),
				'body' => json_decode($e->getResponse()->getBody())
			];
		}
	}
}