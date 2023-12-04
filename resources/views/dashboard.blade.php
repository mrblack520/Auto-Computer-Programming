<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="csrf_token" content="{{ csrf_token() }}">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://unpkg.com/tailwindcss@1.9.6/dist/tailwind.min.css" rel="stylesheet">
    <style>
      .btn{
        background-color: greenyellow;
        width: 30px 30px 30px 30px;
        border-radius: 5px
      }
    </style>
</head>
<body class="h-screen overflow-hidden flex items-center justify-center" style="background: #000000;">
    <div class="flex w-screen h-screen antialiased text-gray-800">
    <div class="flex flex-row h-full w-full overflow-x-hidden">
      <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
        <div class="flex flex-row items-center justify-center h-12 w-full">
          <div
            class="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              ></path>
            </svg>
          </div>
          <div class="ml-2 font-bold text-2xl">QuickChat</div>
        </div>
        <div
          class="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
        >
          <div class="h-20 w-20 rounded-full border overflow-hidden">
            <img
            src="{{ asset('shubham-dhage-dECn_W4b8qQ-unsplash.jpg') }}"
              alt="Avatar"
              class="h-full w-full"
            />
          </div>
          <div class="text-sm font-semibold mt-2">User</div>
          <div class="text-xs text-gray-500">start your chat now</div>
          
        </div>
        <div class="flex flex-col mt-8">
          <div class="flex flex-row items-center justify-between text-xs">
            <span class="font-bold">Profile</span>
           
            
          </div>
         
          <div class="flex flex-col space-y-1 mt-4 -mx-2">
            <button
              class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
            >
              <div
                class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
              >
                P
              </div>
              <div class="ml-2 text-sm font-semibold" ><a 
                href="{{ route('profile.show') }}">
                  {{ __('Profile') }}</a></div>
             
            </button>
            <button
              class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
            >
              <div
                class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
              >
                L
              </div>
              <div class="ml-2 text-sm font-semibold" >
                <form method="POST" action="{{ route('logout') }}" >
                    @csrf
                        <input  type="Submit" value="logout">
                    
                </form>
                
            </div>
             
            </button>
          </div>
        </div>
      </div>
      
      <div class="flex flex-col w-screen h-full p-6" >
        <div
          class="flex flex-col w-100  rounded-2xl bg-lime-500 h-full p-4"
        >
          <div class="flex flex-col h-full overflow-x-auto mb-4">
            <div class="flex flex-col h-full">
              <div class="grid grid-cols-12 gap-y-2">
                
                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                  <div class="flex flex-row items-center">
                    <div
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      A
                    </div>
                    <div
                      class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                    >
                      <div class="flex antialiased text-gray-800" id="user_data" >
                        
                      </div>
                    </div>
                  </div>
                </div>
                
               
                
                <div class="col-start-6 col-end-13 p-3 rounded-lg">
                  <div class="flex items-center justify-start flex-row-reverse">
                    <div
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      A
                    </div>
                    <div
                      class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                    >
                      <div class="flex antialiased text-gray-800" id="chat_data">
                       
                      </div>
                     
                    </div>
                  </div>
                </div>
               
                
              </div>
            </div>
          </div>
          <div
            class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
          >
            
            <div class="flex-grow ml-4">
              <div class="relative w-full">
                <input
                name="data" id="data"
                  type="text"
                  class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                />
                <button
                  class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"

                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="ml-4">
              <button id="chatBtn"
                class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
              >
                <span>Send</span>
                <span class="ml-2">
                  <svg
                    class="w-4 h-4 transform rotate-45 -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
<script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
<script>
    $(document).ready(function(){
        $("#chatBtn").click(function() {
            var data = {
                'data': $('#data').val()
            };

            $.ajax({
                url: "{{ URL::route('chat.post') }}",
                type: "post",
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')
                },
                data: data,
                success: function(response) {
                    console.log(response);
                    displayText('#user_data', data.data);
                    startTypewriter('#chat_data', response[0].generated_text);
                    $('#chat_data').append('<button type="button" id="runButton" class="btn">Go TO InterpraterN</button>');
                    $('#runButton').on('click', function() {
        // Make an AJAX request to your Laravel route
        $.ajax({
            url: '/test', // Replace with your actual Laravel route
            type: 'GET', // Adjust the HTTP method if needed
            data: {
                test: 'test'
            },
            success: function(response) {
                // Handle the success response
                console.log(response);
                window.location.href = 'https://onecompiler.com/';
            },
            error: function(error) {
                // Handle the error response
                console.error(error);
            }
        });
    });
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR);
                }
            });
        });

        function displayText(targetSelector, text) {
            var targetElement = $(targetSelector);
            targetElement.text(text);
        }

        function startTypewriter(targetSelector, text) {
            var targetElement = $(targetSelector);
            targetElement.text('');

            var characters = text.split('');
            var index = 0;

            function typeWriter() {
                if (index < characters.length) {
                    targetElement.append(characters[index]);
                    index++;
                    setTimeout(typeWriter, 50); // Adjust the delay as needed
                }
            }

            typeWriter();
        }
    });
</script>





</html>
