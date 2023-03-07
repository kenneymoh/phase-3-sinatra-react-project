import React from 'react'

export default function AddPet() {
  return (
   <div class="p-8 rounded border border-gray-200">
        <h1 className="font-medium text-3xl text-centre font-bold">ADD NEW PET</h1>
        <form>
            <div class="mt-8 space-y-6">
                <div>
                    <label for="name" className="text-sm text-gray-700 block mb-1 font-medium">Name</label>
                    <input type="text" name="name" id="name" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Name of the Pet" />
                </div>
                <div>
                    <label for="email" className="text-sm text-gray-700 block mb-1 font-medium">Description</label>          <input type="text" name="description" id="description" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Description of the Pet" />
                </div>
                <div>
                    <label for="job" className="text-sm text-gray-700 block mb-1 font-medium">Breed</label>
                    <input type="text" name="breed" id="breed" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Breed" />
                </div>
                <div>
                    <label for="job" className="text-sm text-gray-700 block mb-1 font-medium">Age</label>
                    <input type="number" name="age" id="age" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Age of the Pet" />
                </div>
                <div>
                    <label for="job" class="text-sm text-gray-700 block mb-1 font-medium">Status</label>
                    <input type="text" name="status" id="status" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Adopted or Not Adopted" />
                </div>
            </div>
            <div class="space-x-4 mt-8">
                <button type="submit" class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">submit
                </button>
                <button class="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Cancel
                </button>
            </div>
        </form>
    </div>
  )
}
